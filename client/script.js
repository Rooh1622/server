'use strict';

var socket = new WebSocket("ws://127.0.0.1:8081");
var enId;
socket.onopen = init;
/*for(let i = 0; i < 99; i++){
    setTimeout(function(){
        let tile = document.getElementById('tile').value;

        up(tile);
    }, 500);
}*/
function init() {

    reqest({type: 'connection', date: Date.now()});
    setTimeout(function(){
            let id = document.getElementById('password').value;
            reqest({type: 'queue', myId: id, date: Date.now()});
        }, 2000);


    document.getElementById('start').onclick = function () {
		let id = document.getElementById('password').value;

		let id2 = document.getElementById('id2').value;
        reqest({type: 'newGame', myId: id, enId : id2, date: Date.now()});
		//reqest({type: 'turn', tile: tile, myId: id, enId : id2, date: Date.now()});

		//up(tile);
    };
    document.getElementById('submit').onclick = function () {
		let tile = document.getElementById('tile').value;
		let id = document.getElementById('password').value;
		let id2 = document.getElementById('id2').value;
		let ses = document.getElementById('ses').value;
		reqest({type: 'turn', tile: tile, myId: id, enId : id2, ses_id: ses, date: Date.now()});

		up(tile);
    };
	document.getElementById('reg').onclick = function () {
        //socket.close();
        console.clear();
		//alert(hex2b64('abcdef'));
        let user_id = document.getElementById('password').value;
        reqest({type: 'printField', id: user_id, date: Date.now()});
    };
}
var chars = ['A','B','C','D','E','F','G','H','I','J'];
var c = 0;
function up(v) {
    v = v.slice(1);

   // console.log(v);
    if(c == 9 && v == 10)
        return;
    else if(v == 10){
        c++;
       v = chars[c] + '1';
    } else {
        v ++;
        v = chars[c]  + v;
       // console.log(v)
    }
    document.getElementById('tile').value = v;
   // console.log(v)

}
socket.onclose = function() {  console.log("Connection closed...") };
socket.onmessage = function (event) {

    console.clear();
    var incomingMessage = JSON.parse(event.data);
    //console.dir(incomingMessage);
    //console.dir(event);
    if (incomingMessage == 401){
        showMessage("Ошибка аутентификации");
        socket.close();
        return//.replace("\n", "<br>")
    }
    showMessage(incomingMessage.msg);
    //setCookie('token', incomingMessage, {expires: new Date(new Date().getTime() + 60 * 1000)});
    document.getElementById('password').value = incomingMessage.id;
    if(incomingMessage.e_id != undefined)
        document.getElementById('id2').value = incomingMessage.e_id;
    if(incomingMessage.ses_id != undefined || incomingMessage.ses_id != null)
        document.getElementById('ses').value = incomingMessage.ses_id;
    if(incomingMessage.msg != undefined)
        document.getElementById('msg').value = incomingMessage.msg;
    if(incomingMessage.e_id != undefined) {
        enId = incomingMessage.e_id;

        document.getElementById('id2').value = incomingMessage.e_id;
    }
   // showMessage(document.getElementById('password').value );
    let f = incomingMessage.field;
    console.log(incomingMessage.field);
    //console.log(incomingMessage.replace("\n", "<br>"));

    //showMessage("Успешно! Вы будете перенаправлены в личный кабинет через 2 cекунд...");
    //setTimeout(function(){Redirect("cabinet.html")}, 2000);
};
function reqest(req) {
    console.clear();
    if(socket.readyState == 1) {
         socket.send(JSON.stringify(req));
    } else {
        socket = new WebSocket("ws://127.0.0.1:8081");
        setTimeout(function(){
            reqest(req);
        }, 2000);
    }
}
function showMessage(message) {
    document.getElementById("msg").value = message;
    /*var messageElem = document.createElement('div');
    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElem);
    //console.log(message);*/
    //document.getElementById('subscribe').innerHTML = message;
}