'use strict'
var WebSocketServer = new require('ws');
var url = require("url");
const crypto = require('crypto');
const low = require('lowdb');
var clients = {};
const usersDB = low('users.json');
var module = require("./random");
var queue = [];
//console.log = function () {};
var jwt = require('jsonwebtoken');
var token = jwt.sign({"login":"rooh_user","password":"passlol", "type": "login"},'reg',{
    expiresIn : 15 * 24 * 60 * 60 * 1000 // 15 days
});

console.info("TOKEN " + token);

usersDB.defaults({users: [],leaderboard: [], secret : "", presets:[]}).value();

var secret = usersDB.get('secret') + "";

console.info("SECRET " + secret);
var webSocketServer = new WebSocketServer.Server({
    port: 8082,
    verifyClient: function (info, cb) {
        //var token = info.req.url.split('=')[1];
        var token = info.req.url.split('=')[1];
        let flag = false;
        //console.dir(cb.toString());
        //if(token == "notoken")

        if (!token)
            cb(false, 401, 'Unauthorized');
        else {

            jwt.verify(token, 'reg', function (err, decoded) {
                if (err) {
                    //cb(false, 401, 'Unauthorized')

                    flag = true;
                    console.log("LOG FLAH " + flag);
                } else {
                    info.req.user = decoded; //[1]

                    console.info("\'reg\' Token verified ");
                    let dbLogin = usersDB.get('users').find("login",decoded.login).value();
                    if(decoded.type == 'reg' && dbLogin != undefined && dbLogin.login == decoded.login ){
                        console.info("\tIncoming registration failed: bad login");
                    } else if(decoded.type == 'reg'){
                        console.info("\tIncoming registration");
                        usersDB.get('users')
                            .push({login: decoded.login, password: decoded.password,
                                token: jwt.sign({login:decoded.login },secret,{
                                    expiresIn : 365 * 24 * 60 * 60 * 1000
                                })
                            }).value();
                        usersDB.get('presets')
                            .push({login: decoded.login, preset: []}).value();
                        usersDB.get('leaderboard')
                            .push({
                                login: decoded.login,
                                hits: 0,
                                destroyed: 0,
                                misses: 0
                            }).value();
                        info.req.token = usersDB.get('users')
                            .find({login: decoded.login, password: decoded.password}).value().token;
                        cb(true);
                        console.info("\t\tRegistration successful");
                        console.dir(decoded);
                        console.info("\n");

                    }else if(decoded.type == 'login'){
                        console.info("\tIncoming login");
                        let user = usersDB.get('users')
                            .find({login: decoded.login, password: decoded.password}).value();
                        if(user == undefined){
                            cb(false, 401, 'Unauthorized')
                            console.info("\t\tLogin failed: 401");
                            console.dir(decoded);
                            console.info("\n");
                        } else
                        {

                            info.req.token = usersDB.get('users')
                                .find({login: decoded.login, password: decoded.password}).value().token;
                            cb(true);
                            console.info("\t\tLogin successful");
                            console.dir(decoded);
                            console.info("\n");
                        }

                    }
                    //console.dir(decoded);
                    //cb(true)
                }
            });
            console.dir(flag);
            if (flag) {
                jwt.verify(token, secret, function (err, decoded) {

                    console.info("Secret Token verified ");
                    //console.dir(token);
                    if (err) {
                        cb(false, 401, 'Unauthorized')
                        console.info("\t Auth failed: 401 ");
                    } else {
                        info.req.user = decoded; //[1]

                        //console.dir(decoded);
                        console.info("\t Auth successful:  ");
                        console.dir(decoded);
                        console.info("\n");
                        cb(true)
                    }
                })
            }

        }
    }
});
console.info("opened on  :8082");
webSocketServer.on('connection', function (ws) {
    var id = Math.random();

    //console.dir(sessionsDB.get("lastId"));
    clients[id] = ws;
    //console.info("new connection " + id);
    //console.dir(clients[id].upgradeReq.headers);

    //console.dir(ws.upgradeReq.token);
    clients[id].send(JSON.stringify({
        type: "loginSuccess",
        token: ws.upgradeReq.token
    }));

    //clients[id].close();
    ws.on('message', function (message) {
        //console.info(message);
    });
    ws.on('close', function () {
        //console.info('connection closet ' + id + '\n');
        delete clients[id];
    });

});
