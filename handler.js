/**
 * Created by rooh on 6/4/17.
 */
module.exports.connection = connection;
module.exports.queue = queue;
module.exports.saveField = saveField;
module.exports.endGame = endGame;
module.exports.newGame = newGame;

const low = require('lowdb');
const usersDB = low('users.json');
const sessionsDB = low('db.json');
const random = require("./random");
const ws = require("./websocket");
const shipper = require("./shipper");


async function connection(Client, id) {
    await random.init();
    var Ships = random.ships;
    //var empty = random.emptyField;
    var field = random.field;
    //var f1 = shipToField(Ships);
    await sessionsDB.get('players')
        .push({id: id, Ships: Ships, field: field}).value();
    Client.send(JSON.stringify({type: "connection",id: id}));
}
async function queue(Client, id, queue) {
    console.info("preset -----------");
    //console.dir(json.usePreset);
    /*if(json.usePreset){
     let preset = usersDB.get("presets").find({login : sender_login}).value().preset;
     sessionsDB.get('players').find({id: senderId}).assign({Ships: preset}).value();
     }*/
    let q = queue.shift();
    if(q != undefined){
        Client.send(JSON.stringify({type: "queue",e_id: q, msg: "queue found : " + q}));
        //clients[q].send(JSON.stringify({type: "queue", e_id: -1,msg: "queue found : " + senderId}));
        console.info(q + " Found!");
    } else{

        Client.send(JSON.stringify({type: "queue",e_id: -1, msg: "you added to queue"}));
        console.info(id + " added to queue");
        queue.push(id)
    }
    console.log(queue + "  \n");
}
async function saveField(Client, json) {
    //let db = usersDB.get('leaderboard');
    console.dir("save");
    let ships = await shipper.main(json.ships);
    await usersDB.get("presets").find({login : json.login}).assign({preset: ships}).value();
    Client.send(JSON.stringify({type: "saveFieldOK", result: "OK"}));
}
async function endGame(session_id, senderId, drop) {
    let status = await sessionsDB.get('sessions')
        .find({ses_id: session_id}).value().status;
    let dropCase = drop;
    console.info(status + " " + dropCase);
    if (status == "playing" && (dropCase == "clear" || dropCase == "drop" )){
        console.info(session_id + " " + dropCase +" dropped by " + senderId);
        await sessionsDB.get('sessions')
            .find({ses_id: session_id})
            .assign({status: "drop"}).value();
    }

}
async function newGame(Client, ClientEnemey, id, enId, sender_login,e_login) {
    console.info('income newGame');

    let ses_id = id + '#' + enId;
    await sessionsDB.get('sessions')
        .push({ses_id: ses_id, id: id, e_id: enId, turn: enId, status: "playing",login: sender_login,login_opponent: e_login}).value();

    //for (var key in clients) {
    Client.send(JSON.stringify({
        type: "newGame",
        id: id,
        msg: "Your opponent id -" + enId,
        e_id: enId,
        ses_id: ses_id,
        turn: enId,
        field_mas_e: await sessionsDB.get('players').find({id: enId}).value().field,
        field_mas_p: await sessionsDB.get('players').find({id: id}).value().field,
        //field: bResp(sessionsDB.get('players').find({id: enId}).value().field, sessionsDB.get('players').find({id: id}).value().field)
    }));
    ClientEnemey.send(JSON.stringify({
        type: "newGame",
        id: enId,
        e_id: id,
        ses_id: ses_id,
        turn: enId,
        msg: "Your opponent id -" + id,
        field_mas_p: await sessionsDB.get('players').find({id: enId}).value().field,
        field_mas_e: await sessionsDB.get('players').find({id: id}).value().field,
        //field: bResp(sessionsDB.get('players').find({id: id}).value().field, sessionsDB.get('players').find({id: enId}).value().field)
    }));

}