/**
 * Created by rooh on 5/21/17.
 */
module.exports.main = main;
var _id = 9;
function main(ships) {
    _id = 9;
    console.info("_-_-_-Shipper_-_-_-");
    //let jsonArray = JSON.parse(ships);
    let result = [];
    for(let ship of ships){
        //console.dir(ship);
        let x,y,x2,y2,x3,y3,x4,y4;
        x = getX(ship.c0);
        y = getY(ship.c0);
        x2 = getX(ship.c1);
        y2 = getY(ship.c1);
        x3 = getX(ship.c2);
        y3 = getY(ship.c2);
        x4 = getX(ship.c3);
        y4 = getY(ship.c3);
        let S = new Ship(ship.size,x,y,x2,y2,x3,y3,x4,y4);
        result.push(S);
    }

    return result;
    //let L1 = ships[]
}

class Ship{

    constructor(size,x,y,x2,y2,x3,y3,x4,y4){
        this.id = _id--;
        switch (size){
            case 1:
                this.cHash = (x)* 10 + (y);
                this.x = x ;
                this.y = y;
                this.hp = 1;
                this.len = 1;
                break;
            case 2:
                this.cHash = (x)* 10 + (y);
                this.c2Hash = (x2)* 10 + (y);
                this.x = x;
                this.y = y;
                this.x2 = x2;
                this.y2 = y2;
                this.hp = 2;
                this.len = 2;
                break;
            case 3:
                this.cHash = (x)* 10 + (y);
                this.c2Hash = (x2)* 10 + (y2);
                this.c3Hash = (x3)* 10 + (y3);
                this.x = x;
                this.y = y;
                this.x2 = x2;
                this.y2 = y2;
                this.x3 = x3;
                this.y3 = y3;
                this.hp = 3;
                this.len = 3;
                break;
            case 4:
                this.cHash = (x)* 10 + (y);
                this.c2Hash = (x2)* 10 + (y2);
                this.c3Hash = (x3)* 10 + (y3);
                this.c4Hash = (x4)* 10 + (y4);
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
            this.x4 + ' ' + this.y4 + '\n' + "\nHashes\n" + this.cHash+ " " + this.c2Hash+ " " + this.c3Hash+ " " + this.c4Hash+ "\n\n "


        )
    }
}
function log(log) {
    console.info(log);
}
function getX(index) {
    let x = index % 10;
    return x;
}
function getY(index) {
    let y = Math.floor(index / 10) ;
    return y;
}