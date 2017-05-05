'use strict'
var WebSocketServer = new require('ws');
const crypto = require('crypto');
const low = require('lowdb');
const secret = 'rooh';
var clients = {};
const sessionsDB = low('db.json');
const themesDB = low('themes.json');
var module = require("./random");
var queue = [];
//console.log = function () {};

const empty = module.emptyField;
//console.dir(Ships);
disableLogs([3,1]);
sessionsDB.defaults({players: [], sessions: [], queue: {}}).value();
var webSocketServer = new WebSocketServer.Server({
    port: 8081
});
console.info("opened on  :8081");
webSocketServer.on('connection', function (ws) {

    var id = sessionsDB.get('players').size() + 1;

    //console.dir(sessionsDB.get("lastId"));
    clients[id] = ws;
    console.info("new connection " + id);
    //console.dir(clients[id].upgradeReq.headers);
    ws.on('message', function (message) {
        var json = JSON.parse(message);
        let senderId = parseInt(JSON.parse(message).myId);
        let enId = parseInt(JSON.parse(message).enId);
        let session_id = JSON.parse(message).ses_id + "";
        console.dir(json);
        switch (json.type) {
            case 'connection':
                module.init();
                var Ships = module.ships;
                var empty = module.emptyField;
                var field = module.field;
                var f1 = shipToField(Ships);
                sessionsDB.get('players')
                    .push({id: id, Ships: Ships, field: field}).value();
                clients[id].send(JSON.stringify({type: "connection",id: id}));
                break;
            case 'queue':
                //queue.push(1);
                //queue.push(2);
                let q = queue.shift();
                if(q != undefined){
                    clients[senderId].send(JSON.stringify({type: "queue",e_id: q, msg: "queue found : " + q}));
                    //clients[q].send(JSON.stringify({type: "queue", e_id: -1,msg: "queue found : " + senderId}));
                    console.info(q + " Found!");
                } else{

                    clients[senderId].send(JSON.stringify({type: "queue",e_id: -1, msg: "you added to queue"}));
                    console.info(senderId + " added to queue");
                    queue.push(senderId)
                }
                console.dir(queue + "  \n");
                break;
            case 'newGame':

                // console.log(buildScreen(field));

                //let unheshedtoken = json.login + '#' + json.password
                console.info('income newGame');
                /* if (usersDB.get('users').find({token: json.token}).value()) {
                 for (var key in clients) {
                 clients[key].send(json.token);
                 }
                 } else {
                 for (var key in clients) {
                 clients[key].send('401');
                 }
                 }*/
                let ses_id = id + '#' + enId;
                sessionsDB.get('sessions')
                    .push({ses_id: ses_id, id: id, e_id: enId, turn: enId}).value();

                //for (var key in clients) {
                clients[senderId].send(JSON.stringify({
                    type: "newGame",
                    id: id,
                    msg: "Your oponent id -" + enId,
                    e_id: enId,
                    ses_id: ses_id,
                    field_mas_e: sessionsDB.get('players').find({id: enId}).value().field,
                    field_mas_p: sessionsDB.get('players').find({id: id}).value().field,
                    field: bResp(sessionsDB.get('players').find({id: enId}).value().field, sessionsDB.get('players').find({id: id}).value().field)
                }));
                clients[enId].send(JSON.stringify({
                    type: "newGame",
                    id: enId,
                    e_id: id,
                    ses_id: ses_id,
                    msg: "Your oponent id -" + id,
                    field_mas_p: sessionsDB.get('players').find({id: enId}).value().field,
                    field_mas_e: sessionsDB.get('players').find({id: id}).value().field,
                    field: bResp(sessionsDB.get('players').find({id: id}).value().field, sessionsDB.get('players').find({id: enId}).value().field)
                }));
                //console.log({id: id, field: bResp(empty,f1)});
                // }

                break;
            case 'turn':
                console.info('income turn');
                let result = "miss";
                let tile = -1;
                var dbout = sessionsDB.get('players').find({id: id}).value();
                var e_dbout = sessionsDB.get('players').find({id: enId}).value();
                let turn = sessionsDB.get('sessions').find({ses_id: session_id}).value().turn;
                if(turn != senderId){
                    clients[senderId].send(JSON.stringify({type: "message", id: id, msg: "Not your turn, " + senderId}));
                    console.dir(turn + " " + session_id);
                    //console.dir(turn);
                    break
                }
                // log(typeof enId)
                // console.dir(e_dbout)
                var Ships = dbout.Ships;
                var e_Ships = e_dbout.Ships;
                // console.dir(Ships);
                var empty = module.emptyField;
                var field = dbout.field;
                var e_field = e_dbout.field;
                var f1 = shipToField(Ships);
                var e_f1 = shipToField(e_Ships);
                let indexes;
                if(json.client == "java")
                    indexes = interpretateFrom99(json.tile);
                else
                    indexes = interpretate(json.tile);

                let i = indexes[0] + 1;
                let j = indexes[1] + 1;


                tile = (j - 1) * 10 + (i - 1);
                let cur_ship = findShip(e_Ships, i, j);
                // console.log(i + ' ' + j);
                console.dir(cur_ship);
                log("===============================");
                console.dir(e_Ships[cur_ship]);
                if (cur_ship == -1) {
                    e_field[i][j] = "-";

                    //sessionsDB.get('sessions').
                    log("TURN CHANGE " + session_id +" " + enId);
                    sessionsDB.get('sessions')
                        .find({ses_id: session_id})
                        .assign({turn: enId}).value();



                }
                else if (cur_ship != -1 && e_Ships[cur_ship].isAlive() == true) {
                    result = "hit";
                    tile = (j - 1) * 10 + (i - 1);
                }
                else if (cur_ship != -1 && e_Ships[cur_ship].isAlive() == false) {
                    result = "sink";
                    tile = [];
                    log(e_Ships[cur_ship].len);

                    let cs = e_Ships[cur_ship];
                    switch (cs.len){
                        case 4:
                             tile.push((cs.y4 - 1) * 10 + (cs.x4 - 1));
                             tile.push((cs.y3 - 1) * 10 + (cs.x3 - 1));
                             tile.push((cs.y2 - 1) * 10 + (cs.x2 - 1));
                             tile.push((cs.y - 1) * 10 + (cs.x - 1));
                             break;
                        case 3:
                             tile.push((cs.y3 - 1) * 10 + (cs.x3 - 1));
                             tile.push((cs.y2 - 1) * 10 + (cs.x2 - 1));
                             tile.push((cs.y - 1) * 10 + (cs.x - 1));
                             break;
                        case 2:
                             tile.push((cs.y2 - 1) * 10 + (cs.x2 - 1));
                             tile.push((cs.y - 1) * 10 + (cs.x - 1));
                             break;
                        case 1:
                             tile.push((cs.y - 1) * 10 + (cs.x - 1));
                             break;

                    }
                    let ship = e_Ships[cur_ship];
                    console.dir(e_Ships[cur_ship].id);
                    console.info("------Outline-------");
                    let x = ship.x;
                    let x_max = ship.x;
                    if (ship.x4 != undefined) x_max = ship.x4;
                    else if (ship.x3 != undefined) x_max = ship.x3;
                    else if (ship.x2 != undefined) x_max = ship.x2;
                    if (x > x_max) {
                        let tmp = x;
                        x = x_max;
                        x_max = tmp;
                        console.dir("x max")
                    }
                    let y = ship.y;
                    let y_max = ship.y;
                    if (ship.y4 != undefined) y_max = ship.y4;
                    else if (ship.y3 != undefined) y_max = ship.y3;
                    else if (ship.y2 != undefined) y_max = ship.y2;

                    log("first log : ship.y = " + ship.y + " | y = " + y + "  " + "--" + y_max);
                    if (y > y_max) {
                        let tmp = y;
                        y = y_max;
                        y_max = tmp;
                        console.dir("y max")
                    }
                    console.dir(x + "--" + x_max);
                    console.dir("ship.y = " + ship.y + " | y = " + y + "  " + "--" + y_max);

                    for (let i = x - 1; i < x_max + 2; i++) {
                        console.dir("one i = " + i);
                        for (let j = y - 1; j < y_max + 2; j++) {
                            console.dir("two j = " + j);
                            if (e_f1[i][j] == 0) {
                                e_field[i][j] = "-";
                            }
                        }
                    }
                    console.info("------Outline End-------");
                }
                let hTile = (j - 1) * 10 + (i - 1);
                // console.log(Ships[1].isAlive());
                //field[i + 1][j + 1] = '+';
                //Ships[i + 1][j + 1] = 'X';
                let random_id = Math.floor(Math.random() * (sessionsDB.get('players').size()));
                let enemyField = sessionsDB.get('players').value()[enId - 1].field;
                //let cur_index = sessionsDB.get('players').find({ id : id}).uniqueId().value();
                //console.log("INDEX " + cur_index);
                //for (var key in clients) {
                console.dir("INFO " + tile +  " "+ hTile +  " "+ result);
                clients[senderId].send(JSON.stringify({type: "turn", result: result, tile: tile,hTile : hTile, id: id, field: bResp(e_field, field, enId, senderId)}));
                clients[enId].send(JSON.stringify({type: "turn_from_e", result: result, tile: tile,hTile : hTile, id: enId, field: bResp(field, e_field, senderId, enId)}));

                console.log("\n");
                // }
                break
        }
    });


    ws.on('close', function () {
        console.info('connection closet ' + id + '\n');
        delete clients[id];
    });

});

function buildScreen(mas, id) {
    if (id == undefined) id = '\\';
    let line = '---------------------------------------------\n';
    return '--------------------------------------------- \n| ' + id + ' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |\n---------------------------------------------\n'
        + '| A | ' + mas[1][1] + ' | ' + mas[1][2] + ' | ' + mas[1][3] + ' | ' + mas[1][4] + ' | ' + mas[1][5] + ' | ' + mas[1][6] + ' | ' + mas[1][7] + ' | ' + mas[1][8] + ' | ' + mas[1][9] + ' | ' + mas[1][10] + ' | \n' + line
        + '| B | ' + mas[2][1] + ' | ' + mas[2][2] + ' | ' + mas[2][3] + ' | ' + mas[2][4] + ' | ' + mas[2][5] + ' | ' + mas[2][6] + ' | ' + mas[2][7] + ' | ' + mas[2][8] + ' | ' + mas[2][9] + ' | ' + mas[2][10] + ' | \n' + line
        + '| C | ' + mas[3][1] + ' | ' + mas[3][2] + ' | ' + mas[3][3] + ' | ' + mas[3][4] + ' | ' + mas[3][5] + ' | ' + mas[3][6] + ' | ' + mas[3][7] + ' | ' + mas[3][8] + ' | ' + mas[3][9] + ' | ' + mas[3][10] + ' | \n' + line
        + '| D | ' + mas[4][1] + ' | ' + mas[4][2] + ' | ' + mas[4][3] + ' | ' + mas[4][4] + ' | ' + mas[4][5] + ' | ' + mas[4][6] + ' | ' + mas[4][7] + ' | ' + mas[4][8] + ' | ' + mas[4][9] + ' | ' + mas[4][10] + ' | \n' + line
        + '| E | ' + mas[5][1] + ' | ' + mas[5][2] + ' | ' + mas[5][3] + ' | ' + mas[5][4] + ' | ' + mas[5][5] + ' | ' + mas[5][6] + ' | ' + mas[5][7] + ' | ' + mas[5][8] + ' | ' + mas[5][9] + ' | ' + mas[5][10] + ' | \n' + line
        + '| F | ' + mas[6][1] + ' | ' + mas[6][2] + ' | ' + mas[6][3] + ' | ' + mas[6][4] + ' | ' + mas[6][5] + ' | ' + mas[6][6] + ' | ' + mas[6][7] + ' | ' + mas[6][8] + ' | ' + mas[6][9] + ' | ' + mas[6][10] + ' | \n' + line
        + '| G | ' + mas[7][1] + ' | ' + mas[7][2] + ' | ' + mas[7][3] + ' | ' + mas[7][4] + ' | ' + mas[7][5] + ' | ' + mas[7][6] + ' | ' + mas[7][7] + ' | ' + mas[7][8] + ' | ' + mas[7][9] + ' | ' + mas[7][10] + ' | \n' + line
        + '| H | ' + mas[8][1] + ' | ' + mas[8][2] + ' | ' + mas[8][3] + ' | ' + mas[8][4] + ' | ' + mas[8][5] + ' | ' + mas[8][6] + ' | ' + mas[8][7] + ' | ' + mas[8][8] + ' | ' + mas[8][9] + ' | ' + mas[8][10] + ' | \n' + line
        + '| I | ' + mas[9][1] + ' | ' + mas[9][2] + ' | ' + mas[9][3] + ' | ' + mas[9][4] + ' | ' + mas[9][5] + ' | ' + mas[9][6] + ' | ' + mas[9][7] + ' | ' + mas[9][8] + ' | ' + mas[9][9] + ' | ' + mas[9][10] + ' | \n' + line
        + '| J | ' + mas[10][1] + ' | ' + mas[10][2] + ' | ' + mas[10][3] + ' | ' + mas[10][4] + ' | ' + mas[10][5] + ' | ' + mas[10][6] + ' | ' + mas[10][7] + ' | ' + mas[10][8] + ' | ' + mas[10][9] + ' | ' + mas[10][10] + ' | \n' + line;
}
var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
function interpretate(index) {
    let i = index.charAt(0);
    let j = +index.slice(1) - 1;
    i = chars.indexOf(i);

    //console.log(i + ' ' + j);
    return [i, j];
}
function interpretateFrom99(index) {
    let i = Math.floor(index / 10) ;
    let j = index % 10;

    console.dir(i + ' interpretateFrom99 ' + j);
    return [j, i];
}
function bResp(f1, f2, random_id, id) {
    return buildScreen(f1, random_id) + buildScreen(f2, id)
}
function shipToField(ships) {
    var out = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    ];
    //console.log("OUT " + out );
    for (let i = 0; i < ships.length; i++) {
        switch (i) {
            case 0:
            case 1:
            case 2:
            case 3:
                out[ships[i].x][ships[i].y] = 1;
                break;
            case 4:
            case 5:
            case 6:
                out[ships[i].x][ships[i].y] = 2;
                out[ships[i].x2][ships[i].y2] = 2;
                break;
            case 7 :
            case 8 :
                out[ships[i].x][ships[i].y] = 3;
                out[ships[i].x2][ships[i].y2] = 3;
                out[ships[i].x3][ships[i].y3] = 3;
                break;
            case 9:
                out[ships[i].x][ships[i].y] = 4;
                out[ships[i].x2][ships[i].y2] = 4;
                out[ships[i].x3][ships[i].y3] = 4;
                out[ships[i].x4][ships[i].y4] = 4;
                break;
        }
    }
    return out;
}
function findShip(S, x, y) {
    let flag = -1;
    S.forEach(function (v, i, S) {
        if ((v.x == x && v.y == y) || (v.x2 == x && v.y2 == y) || (v.x3 == x && v.y3 == y) || (v.x4 == x && v.y4 == y)) {
            console.log("fire " + x + " " + y);
            v.hp--;
            flag = v.id;

        }
    });
    return flag;
}
function drawOutline(ship) {
    log("------Outline-------");
    let x_max = ship.x;
    if (ship.x4 != undefined) x_max = ship.x4;
    else if (ship.x3 != undefined) x_max = ship.x3;
    else if (ship.x2 != undefined) x_max = ship.x2;
    let y_max = ship.y;
    if (ship.y4 != undefined) y_max = ship.y4;
    else if (ship.y3 != undefined) y_max = ship.y3;
    else if (ship.y2 != undefined) y_max = ship.y2;

    log(ship.x + "--" + x_max);
    log(ship.y + "--" + y_max);

    for (let i = ship.x - 1; i < x_max + 2; i++) {
        log("one i = " + i);
        for (let j = ship.y - 1; j < y_max + 2; j++) {
            log("two j = " + j);
            if (f1[i][j] == 0) {
                field[i][j] = "-";
            }
        }
    }
    log("------Outline End-------");
}
function log(log) {

    console.log(log);
}
function disableLogs(logs) {
    for(let i = 0; i < logs.length; i++){
        if(logs[i] == 1){
            console.log = function () {};
        }
        if(logs[i] == 2){
            console.info = function () {};
        }
        if(logs[i] == 3){
            console.dir = function () {};
        }
    }
}