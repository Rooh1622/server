'use strict'

var K4,K3,K2,K1,E3,E2,E1,C2,C1,L1;
module.exports.init = init;
var _id = 9;
function init() {
    _id = 9;
    aiField  =[[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    ];
    generate();
    /*log(aiField[1][1]);
     log(buildScreen(aiField));*/
    //return buildScreen(aiField);
    module.exports.screen = buildScreen(aiField);
    module.exports.field = aiField;
    clear();
    module.exports.field2 = aiField2;
    module.exports.emptyField = emptyField;
    //log(buildScreen(aiField));
    //console.log(K1);

    //console.log(L1);
    K1.print();K2.print();K3.print();K4.print();
    E1.print();E2.print();E3.print();
    C1.print();C2.print();
    L1.print();
    //console.log(K4);
    var Ships = [K4,K3,K2,K1,E3,E2,E1,C2,C1,L1];
    //console.log(Ships);
    module.exports.ships = Ships;

}
function clear() {
    for(let i = 0; i < 12; i ++){
        for(let j = 0; j < 12; j ++){
            if(aiField[i][j] == "O")
                aiField[i][j] = " ";
            aiField2[i][j] = " ";
        }
    }


}
function reset() {
    _id = 9;
    aiField = emptyField;

}
function buildScreen(mas) {

    let line = '---------------------------------------------\n';
    let screen = '--------------------------------------------- \n|   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |\n---------------------------------------------\n'
        + '| A | ' + mas[1][1] + ' | ' + mas[1][2] +' | ' +mas[1][3]  +' | ' + mas[1][4]+' | ' + mas[1][5]+' | ' + mas[1][6] +' | ' + mas[1][7] +' | ' +mas[1][8] +' | ' + mas[1][9] +' | ' + mas[1][10] +' | \n' + line
        + '| B | ' + mas[2][1] + ' | ' + mas[2][2] +' | ' +mas[2][3]  +' | ' + mas[2][4]+' | ' + mas[2][5]+' | ' + mas[2][6] +' | ' + mas[2][7] +' | ' +mas[2][8] +' | ' + mas[2][9] +' | ' + mas[2][10] +' | \n' + line
        + '| C | ' + mas[3][1] + ' | ' + mas[3][2] +' | ' +mas[3][3]  +' | ' + mas[3][4]+' | ' + mas[3][5]+' | ' + mas[3][6] +' | ' + mas[3][7] +' | ' +mas[3][8] +' | ' + mas[3][9] +' | ' + mas[3][10] +' | \n' + line
        + '| D | ' + mas[4][1] + ' | ' + mas[4][2] +' | ' +mas[4][3]  +' | ' + mas[4][4]+' | ' + mas[4][5]+' | ' + mas[4][6] +' | ' + mas[4][7] +' | ' +mas[4][8] +' | ' + mas[4][9] +' | ' + mas[4][10] +' | \n' + line
        + '| E | ' + mas[5][1] + ' | ' + mas[5][2] +' | ' +mas[5][3]  +' | ' + mas[5][4]+' | ' + mas[5][5]+' | ' + mas[5][6] +' | ' + mas[5][7] +' | ' +mas[5][8] +' | ' + mas[5][9] +' | ' + mas[5][10] +' | \n' + line
        + '| F | ' + mas[6][1] + ' | ' + mas[6][2] +' | ' +mas[6][3]  +' | ' + mas[6][4]+' | ' + mas[6][5]+' | ' + mas[6][6] +' | ' + mas[6][7] +' | ' +mas[6][8] +' | ' + mas[6][9] +' | ' + mas[6][10] +' | \n' + line
        + '| G | ' + mas[7][1] + ' | ' + mas[7][2] +' | ' +mas[7][3]  +' | ' + mas[7][4]+' | ' + mas[7][5]+' | ' + mas[7][6] +' | ' + mas[7][7] +' | ' +mas[7][8] +' | ' + mas[7][9] +' | ' + mas[7][10] +' | \n' + line
        + '| H | ' + mas[8][1] + ' | ' + mas[8][2] +' | ' +mas[8][3]  +' | ' + mas[8][4]+' | ' + mas[8][5]+' | ' + mas[8][6] +' | ' + mas[8][7] +' | ' +mas[8][8] +' | ' + mas[8][9] +' | ' + mas[8][10] +' | \n' + line
        + '| I | ' + mas[9][1] + ' | ' + mas[9][2] +' | ' +mas[9][3]  +' | ' + mas[9][4]+' | ' + mas[9][5]+' | ' + mas[9][6] +' | ' + mas[9][7] +' | ' +mas[9][8] +' | ' + mas[9][9] +' | ' + mas[9][10] +' | \n' + line
        + '| J | ' + mas[10][1] + ' | ' + mas[10][2] +' | ' +mas[10][3]  +' | ' + mas[10][4]+' | ' + mas[10][5]+' | ' + mas[10][6] +' | ' + mas[10][7] +' | ' +mas[10][8] +' | ' + mas[10][9] +' | ' + mas[10][10] +' | \n' + line

    return screen;
}
function generate() {
    log("------------------Random Log Started------------------");

    lincor(aiField, aiFieldUnits);
    cruser(aiField, aiFieldUnits);
    esmin(aiField, aiFieldUnits);
    kater(aiField, aiFieldUnits);

    /* lincor(aiField2, aiFieldUnits);
     cruser(aiField2, aiFieldUnits);
     esmin(aiField2, aiFieldUnits);
     kater(aiField2, aiFieldUnits);*/

    log("------------------Random Log Ended------------------");
}


var aiField = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

];
var aiField2 = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

];
var emptyField = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

];
var aiFieldUnits = [
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
function getRandomCord() {
    return Math.floor(Math.random() * 10) + 1;
}
function getRandomId() {
    return Math.floor(Math.random() * 100) + 1;
}
function getRandomlogrecton() {
    return Math.floor(Math.random() * 4) + 1;
}
function lincor(generateIn, generateInUnits) {
    for (var i = 0; i < 1; i++) {
        while (1) {
            let x,y,x2,y2,x3,y3,x4,y4 = 0;
            var startCordY = getRandomCord();
            var startCordX = getRandomCord();
            var noRepeatFlag = 0;
            if ((generateIn[startCordY][startCordX] == "X")
                || (generateIn[startCordY][startCordX] == "O")) {
                log("4-Repeat");
                continue
            }
            switch (getRandomlogrecton()) {
                case 1:
                    if ((startCordX - 3 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 2] != "X")
                        && (generateIn[startCordY + 1][startCordX - 2] != "X")
                        && (generateIn[startCordY - 1][startCordX - 3] != "X")
                        && (generateIn[startCordY + 1][startCordX - 3] != "X")
                        && (generateIn[startCordY - 1][startCordX - 4] != "X")
                        && (generateIn[startCordY + 1][startCordX - 4] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX - 4] != "X")) {
                        log("4-1");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX - 1] = "X";
                        generateIn[startCordY][startCordX - 2] = "X";
                        generateIn[startCordY][startCordX - 3] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX - 1;
                        x3 = startCordY; y3 = startCordX - 2;
                        x4 = startCordY; y4 = startCordX - 3;
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 4] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 2] = "O";
                        generateIn[startCordY - 1][startCordX - 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 3] = "O";
                        generateIn[startCordY - 1][startCordX - 3] = "O";
                        generateIn[startCordY + 1][startCordX - 4] = "O";
                        generateIn[startCordY - 1][startCordX - 4] = "O";
                        generateInUnits[startCordY][startCordX] = i + 10;
                        generateInUnits[startCordY][startCordX - 1] = i + 10;
                        generateInUnits[startCordY][startCordX - 2] = i + 10;
                        generateInUnits[startCordY][startCordX - 3] = i + 10;
                        noRepeatFlag = 1;
                    }
                    break;
                case 2:
                    if ((startCordY + 3 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 2][startCordX + 1] != "X")
                        && (generateIn[startCordY + 2][startCordX - 1] != "X")
                        && (generateIn[startCordY + 3][startCordX + 1] != "X")
                        && (generateIn[startCordY + 3][startCordX - 1] != "X")
                        && (generateIn[startCordY + 4][startCordX + 1] != "X")
                        && (generateIn[startCordY + 4][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX] != "X")
                        && (generateIn[startCordY + 4][startCordX] != "X")) {
                        log("4-2");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY + 1][startCordX] = "X";
                        generateIn[startCordY + 2][startCordX] = "X";
                        generateIn[startCordY + 3][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY + 1; y2 = startCordX;
                        x3 = startCordY + 2; y3 = startCordX;
                        x4 = startCordY + 3; y4 = startCordX;
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 4][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY + 2][startCordX + 1] = "O";
                        generateIn[startCordY + 2][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 3][startCordX + 1] = "O";
                        generateIn[startCordY + 3][startCordX - 1] = "O";
                        generateIn[startCordY + 4][startCordX + 1] = "O";
                        generateIn[startCordY + 4][startCordX - 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 10;
                        generateInUnits[startCordY + 1][startCordX] = i + 10;
                        generateInUnits[startCordY + 2][startCordX] = i + 10;
                        generateInUnits[startCordY + 3][startCordX] = i + 10;
                        noRepeatFlag = 1;
                    }
                    break;
                case 3:
                    if ((startCordY - 3 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 2][startCordX - 1] != "X")
                        && (generateIn[startCordY - 2][startCordX + 1] != "X")
                        && (generateIn[startCordY - 3][startCordX - 1] != "X")
                        && (generateIn[startCordY - 3][startCordX + 1] != "X")
                        && (generateIn[startCordY - 4][startCordX - 1] != "X")
                        && (generateIn[startCordY - 4][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX] != "X")
                        && (generateIn[startCordY - 4][startCordX] != "X")) {
                        log("4-3");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY - 1][startCordX] = "X";
                        generateIn[startCordY - 2][startCordX] = "X";
                        generateIn[startCordY - 3][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY - 1; y2 = startCordX;
                        x3 = startCordY - 2; y3 = startCordX;
                        x4 = startCordY - 3; y4 = startCordX;
                        generateIn[startCordY - 4][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 2][startCordX + 1] = "O";
                        generateIn[startCordY - 2][startCordX - 1] = "O";
                        generateIn[startCordY - 3][startCordX + 1] = "O";
                        generateIn[startCordY - 3][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY - 4][startCordX + 1] = "O";
                        generateIn[startCordY - 4][startCordX - 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 10;
                        generateInUnits[startCordY - 1][startCordX] = i + 10;
                        generateInUnits[startCordY - 2][startCordX] = i + 10;
                        generateInUnits[startCordY - 3][startCordX] = i + 10;
                        noRepeatFlag = 1;
                    }
                    break;
                case 4:
                    if ((startCordX + 3 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 2] != "X")
                        && (generateIn[startCordY + 1][startCordX + 2] != "X")
                        && (generateIn[startCordY - 1][startCordX + 3] != "X")
                        && (generateIn[startCordY + 1][startCordX + 3] != "X")
                        && (generateIn[startCordY - 1][startCordX + 4] != "X")
                        && (generateIn[startCordY + 1][startCordX + 4] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX + 4] != "X")) {
                        log("4-4");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX + 1] = "X";
                        generateIn[startCordY][startCordX + 2] = "X";
                        generateIn[startCordY][startCordX + 3] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX + 1;
                        x3 = startCordY; y3 = startCordX + 2;
                        x4 = startCordY; y4 = startCordX + 3;
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 4] = "O";
                        generateIn[startCordY - 1][startCordX + 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 2] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 3] = "O";
                        generateIn[startCordY + 1][startCordX + 3] = "O";
                        generateIn[startCordY - 1][startCordX + 4] = "O";
                        generateIn[startCordY + 1][startCordX + 4] = "O";
                        generateInUnits[startCordY][startCordX] = i + 10;
                        generateInUnits[startCordY][startCordX + 1] = i + 10;
                        generateInUnits[startCordY][startCordX + 2] = i + 10;
                        generateInUnits[startCordY][startCordX + 3] = i + 10;
                        noRepeatFlag = 1;
                    }
                    break;
                default:
                    log("Err");
                    break
            }

            if (noRepeatFlag) {
                startCordY = undefined;
                startCordX = undefined;
                 L1 = new Ship(x,y,x2,y2,x3,y3,x4,y4);
                noRepeatFlag = 0;
                log("4-Finished");
                break
            }
        }
    }
}

function cruser(generateIn, generateInUnits) {
    for (var i = 0; i < 2; i++) {
        while (1) {

            let x,y,x2,y2,x3,y3 = 0;
            var startCordY = getRandomCord();
            var startCordX = getRandomCord();
            var noRepeatFlag = 0;
            if ((generateIn[startCordY][startCordX] == "X")
                || (generateIn[startCordY][startCordX] == "O")) {
                log("3-Repeat");
                continue
            }
            switch (getRandomlogrecton()) {
                case 1:
                    if ((startCordX - 2 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 2] != "X")
                        && (generateIn[startCordY + 1][startCordX - 2] != "X")
                        && (generateIn[startCordY - 1][startCordX - 3] != "X")
                        && (generateIn[startCordY + 1][startCordX - 3] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX - 3] != "X")) {
                        log("3-1");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX - 1] = "X";
                        generateIn[startCordY][startCordX - 2] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX - 1;
                        x3 = startCordY; y3 = startCordX - 2;
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 3] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 2] = "O";
                        generateIn[startCordY - 1][startCordX - 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 3] = "O";
                        generateIn[startCordY - 1][startCordX - 3] = "O";
                        generateInUnits[startCordY][startCordX] = i + 8;
                        generateInUnits[startCordY][startCordX - 1] = i + 8;
                        generateInUnits[startCordY][startCordX - 2] = i + 8;
                        noRepeatFlag = 1;
                    }
                    break;
                case 2:
                    if ((startCordY + 2 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 2][startCordX + 1] != "X")
                        && (generateIn[startCordY + 2][startCordX - 1] != "X")
                        && (generateIn[startCordY + 3][startCordX + 1] != "X")
                        && (generateIn[startCordY + 3][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX] != "X")
                        && (generateIn[startCordY + 3][startCordX] != "X")) {
                        log("3-2");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY + 1][startCordX] = "X";
                        generateIn[startCordY + 2][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY + 1; y2 = startCordX;
                        x3 = startCordY + 2; y3 = startCordX;
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 3][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY + 2][startCordX + 1] = "O";
                        generateIn[startCordY + 2][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 3][startCordX + 1] = "O";
                        generateIn[startCordY + 3][startCordX - 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 8;
                        generateInUnits[startCordY + 1][startCordX] = i + 8;
                        generateInUnits[startCordY + 2][startCordX] = i + 8;
                        noRepeatFlag = 1;
                    }
                    break;
                case 3:
                    if ((startCordY - 2 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 2][startCordX - 1] != "X")
                        && (generateIn[startCordY - 2][startCordX + 1] != "X")
                        && (generateIn[startCordY - 3][startCordX - 1] != "X")
                        && (generateIn[startCordY - 3][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX] != "X")
                        && (generateIn[startCordY - 3][startCordX] != "X")) {
                        log("3-3");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY - 1][startCordX] = "X";
                        generateIn[startCordY - 2][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY - 1; y2 = startCordX;
                        x3 = startCordY - 2; y3 = startCordX;
                        generateIn[startCordY - 3][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 2][startCordX + 1] = "O";
                        generateIn[startCordY - 2][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY - 3][startCordX + 1] = "O";
                        generateIn[startCordY - 3][startCordX - 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 8;
                        generateInUnits[startCordY - 1][startCordX] = i + 8;
                        generateInUnits[startCordY - 2][startCordX] = i + 8;
                        noRepeatFlag = 1;
                    }
                    break;
                case 4:
                    if ((startCordX + 2 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 2] != "X")
                        && (generateIn[startCordY + 1][startCordX + 2] != "X")
                        && (generateIn[startCordY - 1][startCordX + 3] != "X")
                        && (generateIn[startCordY + 1][startCordX + 3] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX + 3] != "X")) {
                        log("3-4");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX + 1] = "X";
                        generateIn[startCordY][startCordX + 2] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX + 1;
                        x3 = startCordY; y3 = startCordX + 2;
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 3] = "O";
                        generateIn[startCordY - 1][startCordX + 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 2] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 3] = "O";
                        generateIn[startCordY + 1][startCordX + 3] = "O";
                        generateInUnits[startCordY][startCordX] = i + 8;
                        generateInUnits[startCordY][startCordX + 1] = i + 8;
                        generateInUnits[startCordY][startCordX + 2] = i + 8;

                        noRepeatFlag = 1;
                    }
                    break;
                default:
                    log("Err");
                    break
            }

            if (noRepeatFlag) {
                startCordY = undefined;
                startCordX = undefined;
                switch (i){
                    case 0:  C1 = new Ship(x,y,x2,y2,x3,y3);; break;
                    case 1:  C2 = new Ship(x,y,x2,y2,x3,y3); break
                }

                noRepeatFlag = 0;
                log("3-Finished");
                break
            }
        }
    }
}

function esmin(generateIn, generateInUnits) {
    for (var i = 0; i < 3; i++) {
        while (1) {

            let x,y,x2,y2 = 0;
            var startCordY = getRandomCord();
            var startCordX = getRandomCord();
            var noRepeatFlag = 0;
            if ((generateIn[startCordY][startCordX] == "X")
                || (generateIn[startCordY][startCordX] == "O")) {
                log("2-Repeat");
                continue
            }
            switch (getRandomlogrecton()) {
                case 1:
                    if ((startCordX - 1 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 2] != "X")
                        && (generateIn[startCordY + 1][startCordX - 2] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX + 1] != "X")
                        && (generateIn[startCordY][startCordX - 2] != "X")) {
                        log("2-1");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX - 1] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX - 1;
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 2] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 2] = "O";
                        generateIn[startCordY - 1][startCordX - 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 5;
                        generateInUnits[startCordY][startCordX - 1] = i + 5;
                        noRepeatFlag = 1;
                    }
                    break;
                case 2:
                    if ((startCordY + 1 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 2][startCordX + 1] != "X")
                        && (generateIn[startCordY + 2][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX] != "X")
                        && (generateIn[startCordY + 2][startCordX] != "X")) {
                        log("2-2");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY + 1][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY + 1; y2 = startCordX;
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY + 2][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY + 2][startCordX + 1] = "O";
                        generateIn[startCordY + 2][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 5;
                        generateInUnits[startCordY + 1][startCordX] = i + 5;
                        noRepeatFlag = 1;
                    }
                    break;
                case 3:
                    if ((startCordY - 1 > 1)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 2][startCordX - 1] != "X")
                        && (generateIn[startCordY - 2][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX] != "X")
                        && (generateIn[startCordY - 2][startCordX] != "X")) {
                        log("2-3");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY - 1][startCordX] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY - 1; y2 = startCordX;
                        generateIn[startCordY - 2][startCordX] = "O";
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY][startCordX + 1] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 2][startCordX + 1] = "O";
                        generateIn[startCordY - 2][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 5;
                        generateInUnits[startCordY - 1][startCordX] = i + 5;
                        noRepeatFlag = 1;
                    }
                    break;
                case 4:
                    if ((startCordX + 1 < 11)
                        && (generateIn[startCordY][startCordX] != "X")
                        && (generateIn[startCordY][startCordX] != "O")
                        && (generateIn[startCordY - 1][startCordX + 1] != "X")
                        && (generateIn[startCordY + 1][startCordX + 1] != "X")
                        && (generateIn[startCordY - 1][startCordX + 2] != "X")
                        && (generateIn[startCordY + 1][startCordX + 2] != "X")
                        && (generateIn[startCordY - 1][startCordX - 1] != "X")
                        && (generateIn[startCordY + 1][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX - 1] != "X")
                        && (generateIn[startCordY][startCordX + 2] != "X")) {
                        log("2-4");
                        generateIn[startCordY][startCordX] = "X";
                        generateIn[startCordY][startCordX + 1] = "X";
                        x = startCordY; y = startCordX;
                        x2 = startCordY; y2 = startCordX + 1;
                        generateIn[startCordY + 1][startCordX] = "O";
                        generateIn[startCordY - 1][startCordX] = "O";
                        generateIn[startCordY][startCordX - 1] = "O";
                        generateIn[startCordY][startCordX + 2] = "O";
                        generateIn[startCordY - 1][startCordX + 2] = "O";
                        generateIn[startCordY + 1][startCordX + 1] = "O";
                        generateIn[startCordY - 1][startCordX + 1] = "O";
                        generateIn[startCordY + 1][startCordX + 2] = "O";
                        generateIn[startCordY - 1][startCordX - 1] = "O";
                        generateIn[startCordY + 1][startCordX - 1] = "O";
                        generateInUnits[startCordY][startCordX] = i + 5;
                        generateInUnits[startCordY][startCordX + 1] = i + 5;

                        noRepeatFlag = 1;
                    }
                    break;
                default:
                    log("Err");
                    break
            }

            if (noRepeatFlag) {
                startCordY = undefined;
                startCordX = undefined;
                noRepeatFlag = 0;
                switch (i){
                    case 0:  E1 = new Ship(x,y,x2,y2); break;
                    case 1:  E2 = new Ship(x,y,x2,y2); break;
                    case 2:  E3 = new Ship(x,y,x2,y2); break
                }
                log("2-Finished");
                break
            }
        }
    }
}
function log(log) {
    console.log(log);
}

function kater(generateIn, generateInUnits) {
    for (var i = 0; i < 4; i++) {
        while (1) {
            let x,y = 0;
            var startCordY = getRandomCord();
            var startCordX = getRandomCord();
            var noRepeatFlag = 0;
            if ((generateIn[startCordY][startCordX] == "X")
                || (generateIn[startCordY][startCordX] == "O")) {
                log("1-Repeat");
                continue
            }
            if ((generateIn[startCordY][startCordX] != "X")
                && (generateIn[startCordY][startCordX] != "O")
                && (generateIn[startCordY - 1][startCordX] != "X")
                && (generateIn[startCordY + 1][startCordX] != "X")
                && (generateIn[startCordY - 1][startCordX - 1] != "X")
                && (generateIn[startCordY + 1][startCordX - 1] != "X")
                && (generateIn[startCordY - 1][startCordX + 1] != "X")
                && (generateIn[startCordY + 1][startCordX + 1] != "X")
                && (generateIn[startCordY][startCordX + 1] != "X")
                && (generateIn[startCordY][startCordX - 1] != "X")) {
                log("1-1");
                generateIn[startCordY][startCordX] = "X";
                x = startCordY; y = startCordX;
                generateIn[startCordY][startCordX + 1] = "O";
                generateIn[startCordY][startCordX - 1] = "O";
                generateIn[startCordY + 1][startCordX] = "O";
                generateIn[startCordY - 1][startCordX] = "O";
                generateIn[startCordY + 1][startCordX - 1] = "O";
                generateIn[startCordY - 1][startCordX - 1] = "O";
                generateIn[startCordY + 1][startCordX + 1] = "O";
                generateIn[startCordY - 1][startCordX + 1] = "O";
                generateInUnits[startCordY][startCordX] = i + 1;
                noRepeatFlag = 1;
            }
            if (noRepeatFlag) {
                startCordY = undefined;
                startCordX = undefined;
                switch (i){
                    case 0:  K1 = new Ship(x,y); break;
                    case 1:  K2 = new Ship(x,y); break;
                    case 2:  K3 = new Ship(x,y); break;
                    case 3:  K4 = new Ship(x,y); break;
                }

                noRepeatFlag = 0;
                log("1-Finished");
                break
            }
        }
    }


}
class Ship{

    constructor(x,y,x2,y2,x3,y3,x4,y4){
        this.id = _id--;
        switch (arguments.length){
            case 2:
                log(2);
                this.cHash = (x - 1)* 10 + (y-1);
                this.x = x ;
                this.y = y;
                this.hp = 1;
                this.len = 1;
                break;
            case 4:
                log(4);
                this.cHash = (x - 1)* 10 + (y-1);
                this.c2Hash = (x2 - 1)* 10 + (y2-1);
                this.x = x;
                this.y = y;
                this.x2 = x2;
                this.y2 = y2;
                this.hp = 2;
                this.len = 2;
                break;
            case 6:
                this.cHash = (x - 1)* 10 + (y-1);
                this.c2Hash = (x2 - 1)* 10 + (y2-1);
                this.c3Hash = (x3 - 1)* 10 + (y3-1);
                this.x = x;
                this.y = y;
                this.x2 = x2;
                this.y2 = y2;
                this.x3 = x3;
                this.y3 = y3;
                this.hp = 3;
                this.len = 3;
                break;
            case 8:
                log(8);
                this.cHash = (x - 1)* 10 + (y-1);
                this.c2Hash = (x2 - 1)* 10 + (y2-1);
                this.c3Hash = (x3 - 1)* 10 + (y3-1);
                this.c4Hash = (x4 - 1)* 10 + (y4-1);
                this.x = x;
                this.y = y;
                this.x2 = x2;
                this.y2 = y2;
                this.x3 = x3;
                this.y3 = y3;
                this.x4 = x4;
                this.y4 = y4;
                this.hp = 4;
                this.len = 4;
                break;
        }

    }
    isAlive(){
        return this.hp != 0;
    }
    print(){
        log("ID " + this.id + " cords \n" + this.x + ' ' + this.y + '\n' +
            this.x2 + ' ' + this.y2 + '\n' +
            this.x3 + ' ' + this.y3 + '\n' +
            this.x4 + ' ' + this.y4 + '\n' + "\nHashes\n" + this.cHash+ " " + this.c2Hash+ " " + this.c3Hash+ " " + this.c4Hash+ " "


        )
    }
}