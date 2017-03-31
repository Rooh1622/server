window.onload = init;
function init() {
	document.getElementById("log").innerHTML = "Игра начинается!";
	document.getElementById("log").innerHTML += "<br>Ход игрока";
	random.generateAiField();
	view.fillAiField();
	
}
var view = {
	fillAiField : function () {
		var i,j;
		for(i = 1; i < 11; i++){
			for(j = 1; j < 11; j++){
				if (1)
					document.getElementById("b" + ((i-1) * 10 + j - 1)).innerHTML = plCords.playerField[i][j];
			}
		};
		for(i = 1; i < 11; i++){
			for(j = 1; j < 11; j++){
				if (1)
					document.getElementById("d" + ((i-1) * 10 + j - 1)).innerHTML = aiCords.aiFieldUnits[i][j];
			}
		}	
	},
};
var controller = {
	turnMarker : "player",
	callAiTurn : function () {
		if (turn == "Ai"){this.aiTurn()} else {};
		
	},
	playerTurn : function () {
		this.hitTracker("Player","",aiCords.aiField,aiCords.aiFieldUnits, aiScore.score, aiCords.cord, aiCords.cordC);
		
	},
	aiTurn : function () {
		this.currentTileClick = getRandomId();
		this.hitTracker("Ai","p",plCords.playerField,plCords.playerFieldUnits, plScore.score, plCords.cord, plCords.cordC);
	},
	hitTracker : function (turn,table,cordsField,cordsFieldUnits, score, cord, cordC) {
		console.log("------------------" + turn + " Turn Log Started------------------");
		var id = this.currentTileClick;
		var x = (Math.floor(id / 10) + 1) ;
		var y = (id % 10) + 1;
		console.log(this.currentTileClick,x,y);
		var inTileUnit = cordsFieldUnits[x][y];
		console.log(x ,y);
		if (document.getElementById(table + id).innerHTML != "O" 
			&& document.getElementById(table + id).innerHTML != "X")
		{
			switch (inTileUnit) {
					case 0:
					cordsField[x][y] = "O";
					document.getElementById(table + id).innerHTML = cordsField[x][y];
					if (turn == "Player"){this.aiTurn();} else if (turn == "Ai"){this.turnMarker = "player";};
					break
					case 1:
						score[0] --;
						console.log("kater1HP - 1; Current:" + score[0]);
						this.showConturOndestroy(x,y,id,cordsField,table);
						if (turn == "Ai"){this.aiTurn()};
						break
					case 2:
						score[1] --;
						console.log("kater2HP - 1; Current:" + score[1]);
						this.showConturOndestroy(x,y,id,cordsField,table);
						if (turn == "Ai"){this.aiTurn()};
						break
					case 3:
						score[2] --;
						console.log("kater3HP - 1; Current:" + score[2]);
						this.showConturOndestroy(x,y,id,cordsField,table);
						if (turn == "Ai"){this.aiTurn()};
						break
					case 4:
						score[3] --;
						console.log("kater4HP - 1; Current:" + score[3]);
						this.showConturOndestroy(x,y,id,cordsField,table);
						if (turn == "Ai"){this.aiTurn()};
						break
					case 5:
						if (score[4] == 0) {
							
						} else {
							cord[0][cordC[0]] = x;console.log(cord[0][cordC[0]]);
							cord[0][cordC[0] + 1] = y;console.log(cord[0][cordC[0] + 1]);
							cordC[0] += 2;console.log(cordC[0]);
							score[4] --;
							console.log("esmin5HP - 1; Current:" + score[4]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[4] == 0)
							{
								this.showConturOndestroy(cord[0][0],cord[0][1],id,cordsField,table); 
								this.showConturOndestroy(cord[0][2],cord[0][3],id,cordsField,table);
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break
					case 6:
						if (score[5] == 0) {
							
						} else {
							cord[1][cordC[1]] = x;console.log(cord[1][cordC[1]]);
							cord[1][cordC[1] + 1] = y;console.log(cord[1][cordC[1] + 1]);
							cordC[1] += 2;console.log(cordC[1]);
							score[5] --;
							console.log("esmin6HP - 1; Current:" + score[5]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[5] == 0)
							{
								this.showConturOndestroy(cord[1][0],cord[1][1],id,cordsField,table); 
								this.showConturOndestroy(cord[1][2],cord[1][3],id,cordsField,table);
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break
					case 7:
						if (score[6] == 0) {
							
						} else {
							cord[2][cordC[2]] = x;console.log(cord[2][cordC[2]]);
							cord[2][cordC[2] + 1] = y;console.log(cord[2][cordC[2] + 1]);
							cordC[2] += 2;console.log(cordC[2]);
							score[6] --;
							console.log("esmin7HP - 1; Current:" + score[6]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[6] == 0)
							{
								this.showConturOndestroy(cord[2][0],cord[2][1],id,cordsField,table); 
								this.showConturOndestroy(cord[2][2],cord[2][3],id,cordsField,table);
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break
					case 8:
						if (score[7] == 0) {
							
						} else {
							cord[3][cordC[3]] = x;console.log(cord[3][cordC[3]]);
							cord[3][cordC[3] + 1] = y;console.log(cord[3][cordC[3] + 1]);
							cordC[3] += 2;console.log(cordC[3]);
							score[7] --;
							console.log("cruser8HP - 1; Current:" + score[7]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[7] == 0)
							{
								this.showConturOndestroy(cord[3][0],cord[3][1],id,cordsField,table); 
								this.showConturOndestroy(cord[3][2],cord[3][3],id,cordsField,table); 
								this.showConturOndestroy(cord[3][4],cord[3][5],id,cordsField,table);
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break
					case 9:
						if (score[8] == 0) {
							
						} else {
							cord[4][cordC[4]] = x;console.log(cord[4][cordC[4]]);
							cord[4][cordC[4] + 1] = y;console.log(cord[4][cordC[4] + 1]);
							cordC[4] += 2;console.log(cordC[4]);
							score[8] --;
							console.log("cruser9HP - 1; Current:" + score[8]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[8] == 0)
							{
								this.showConturOndestroy(cord[4][0],cord[4][1],id,cordsField,table); 
								this.showConturOndestroy(cord[4][2],cord[4][3],id,cordsField,table); 
								this.showConturOndestroy(cord[4][4],cord[4][5],id,cordsField,table);
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break
					case 10:
						if (score[9] == 0) {
							
						} else {
							cord[5][cordC[5]] = x;console.log(cord[5][cordC[5]]);
							cord[5][cordC[5] + 1] = y;console.log(cord[5][cordC[5] + 1]);
							cordC[5] += 2;console.log(cordC[5]);
							score[9] --;
							console.log("lincor10HP - 1; Current:" + score[9]);
							document.getElementById(table + id).innerHTML = cordsField[x][y];
							if (score[9] == 0)
							{
								this.showConturOndestroy(cord[5][0],cord[5][1],id,cordsField,table); 
								this.showConturOndestroy(cord[5][2],cord[5][3],id,cordsField,table); 
								this.showConturOndestroy(cord[5][4],cord[5][5],id,cordsField,table); 
								this.showConturOndestroy(cord[5][6],cord[5][7],id,cordsField,table); 
							};
							if (turn == "Ai"){this.aiTurn()};
						}
						break	
					default:
						console.log("Err");
						break
				};
		if (aiScore.score[0] == 0
			&& aiScore.score[1] == 0
			&& aiScore.score[2] == 0
			&& aiScore.score[3] == 0
			&& aiScore.score[4] == 0
			&& aiScore.score[5] == 0
			&& aiScore.score[6] == 0
			&& aiScore.score[7] == 0
			&& aiScore.score[8] == 0
			&& aiScore.score[9] == 0) {document.getElementById("log").innerHTML = "Игрок победил!";this.turnMarker = false;return};
		if (plScore.score[0] == 0
			&& plScore.score[1] == 0
			&& plScore.score[2] == 0
			&& plScore.score[3] == 0
			&& plScore.score[4] == 0
			&& plScore.score[5] == 0
			&& plScore.score[6] == 0
			&& plScore.score[7] == 0
			&& plScore.score[8] == 0
			&& plScore.score[9] == 0) {document.getElementById("log").innerHTML = "Компьютер победил!";this.turnMarker = false;return};
		if (turn == "Ai"){document.getElementById("log").innerHTML += "<br>Ход компьютера";} else if(turn == "Player"){document.getElementById("log").innerHTML += "<br>Ход игрока";};
		console.log("------------------" + turn + " Turn Log Ended------------------");
		};
	},
	showConturOndestroy : function (x,y,id,cordsField,table) {
		var edge = undefined;
		if (x == 1) {edge = "up"}
		else if (x == 10) {edge = "down"}
		else if (y == 1) {edge = "left"}
		else if (y == 10) {edge = "right"};
		switch (edge) {
			case "left" :
				console.log(edge);
				
				document.getElementById(table +id).innerHTML = cordsField[x][y];
				document.getElementById(table +((x) * 10 + y )).innerHTML = cordsField[x + 1][y + 1];
				document.getElementById(table +((x - 1) * 10 + y )).innerHTML = cordsField[x][y + 1];
				document.getElementById(table +((x - 2) * 10 + y )).innerHTML = cordsField[x - 1][y + 1];
				document.getElementById(table +((x) * 10 + y - 1)).innerHTML = cordsField[x + 1][y];
				document.getElementById(table +((x - 2) * 10 + y - 1)).innerHTML = cordsField[x - 1][y];
				break
			case "right" :
				console.log(edge);
				document.getElementById(table +id).innerHTML = cordsField[x][y];
				document.getElementById(table +((x) * 10 + y - 1)).innerHTML = cordsField[x + 1][y];
				document.getElementById(table +((x - 2) * 10 + y - 1)).innerHTML = cordsField[x - 1][y];
				document.getElementById(table +((x) * 10 + y - 2)).innerHTML = cordsField[x + 1][y - 1];
				document.getElementById(table +((x - 1) * 10 + y - 2)).innerHTML = cordsField[x][y - 1];
				document.getElementById(table +((x - 2) * 10 + y - 2)).innerHTML = cordsField[x - 1][y - 1];
				break
			case "up" :
				console.log(edge);
				document.getElementById(table +id).innerHTML = cordsField[x][y];
				document.getElementById(table +((x) * 10 + y - 1)).innerHTML = cordsField[x + 1][y];
				if (y != 1) {
					document.getElementById(table +((x - 1) * 10 + y - 2)).innerHTML = cordsField[x][y - 1];
					document.getElementById(table +((x) * 10 + y - 2)).innerHTML = cordsField[x + 1][y - 1];
				}
				if (y != 10) {
					document.getElementById(table +((x) * 10 + y )).innerHTML = cordsField[x + 1][y + 1];
					document.getElementById(table +((x - 1) * 10 + y )).innerHTML = cordsField[x][y + 1];
				}
				break
			case "down" :
				console.log(edge);
				document.getElementById(table +id).innerHTML = cordsField[x][y];
				document.getElementById(table +((x - 2) * 10 + y - 1)).innerHTML = cordsField[x - 1][y];
				if (y != 1) {
					document.getElementById(table +((x - 1) * 10 + y - 2)).innerHTML = cordsField[x][y - 1];
					document.getElementById(table +((x - 2) * 10 + y - 2)).innerHTML = cordsField[x - 1][y - 1];
				}
				if (y != 10) {	
					document.getElementById(table +((x - 1) * 10 + y )).innerHTML = cordsField[x][y + 1];
					document.getElementById(table +((x - 2) * 10 + y )).innerHTML = cordsField[x - 1][y + 1];
					
				}
				break
			default:
				console.log("internal");
				
				document.getElementById(table +id).innerHTML = cordsField[x][y];
				document.getElementById(table +((x) * 10 + y )).innerHTML = cordsField[x + 1][y + 1];
				document.getElementById(table +((x - 1) * 10 + y )).innerHTML = cordsField[x][y + 1];
				document.getElementById(table +((x - 2) * 10 + y )).innerHTML = cordsField[x - 1][y + 1];
				document.getElementById(table +((x) * 10 + y - 1)).innerHTML = cordsField[x + 1][y];
				document.getElementById(table +((x - 2) * 10 + y - 1)).innerHTML = cordsField[x - 1][y];
				document.getElementById(table +((x) * 10 + y - 2)).innerHTML = cordsField[x + 1][y - 1];
				document.getElementById(table +((x - 1) * 10 + y - 2)).innerHTML = cordsField[x][y - 1];
				document.getElementById(table +((x - 2) * 10 + y - 2)).innerHTML = cordsField[x - 1][y - 1];
				break
		}
	},
	currentTileClick : undefined, 
}
var aiScore = {
	score : [1,1,1,1,2,2,2,3,3,4],
	total: undefined,
}
var plScore = {
	score : [1,1,1,1,2,2,2,3,3,4],
	total: undefined,
}
var random = {
	generateAiField: function () {
		console.log("------------------Random Log Started------------------");
		random.lincor(aiCords.aiField,aiCords.aiFieldUnits);
		random.cruser(aiCords.aiField,aiCords.aiFieldUnits);
		random.esmin(aiCords.aiField,aiCords.aiFieldUnits);
		random.kater(aiCords.aiField,aiCords.aiFieldUnits);
		
		random.lincor(plCords.playerField,plCords.playerFieldUnits);
		random.cruser(plCords.playerField,plCords.playerFieldUnits);
		random.esmin(plCords.playerField,plCords.playerFieldUnits);
		random.kater(plCords.playerField,plCords.playerFieldUnits);
		console.log("------------------Random Log Ended------------------");
	},
	lincor : function (generateIn,generateInUnits) {
		for(var i = 0; i < 1; i++){
				while (1) {
					startCordY = getRandomCord();
					startCordX = getRandomCord();
					var noRepeatFlag = 0;
					if ((generateIn[startCordY][startCordX] == "X") 
					|| (generateIn[startCordY][startCordX] == "O")){
						console.log("4-Repeat");
						continue
					}
					switch (getRandomDirrecton()) {
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
							&& (generateIn[startCordY][startCordX - 4] != "X")){
								console.log("4-1");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX - 1] = "X";
								generateIn[startCordY][startCordX - 2] = "X";
								generateIn[startCordY][startCordX - 3] = "X";
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
							break
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
							&& (generateIn[startCordY + 4][startCordX] != "X"))
							{
								console.log("4-2");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY + 1][startCordX] = "X";
								generateIn[startCordY + 2][startCordX] = "X";
								generateIn[startCordY + 3][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY - 4][startCordX] != "X")){
								console.log("4-3");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY - 1][startCordX] = "X";
								generateIn[startCordY - 2][startCordX] = "X";
								generateIn[startCordY - 3][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY][startCordX + 4] != "X")){
								console.log("4-4");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX + 1] = "X";
								generateIn[startCordY][startCordX + 2] = "X";
								generateIn[startCordY][startCordX + 3] = "X";
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
							break
						default:
							console.log("Err")
							break
					}
					
					if (noRepeatFlag){
						startCordY = undefined;
						startCordX = undefined;
						noRepeatFlag = 0;
						console.log("4-Finished")
						break
					}
				}
		}	
	},
	cruser: function (generateIn,generateInUnits) {
		for(var i = 0; i < 2; i++){
				while (1) {
					startCordY = getRandomCord();
					startCordX = getRandomCord();
					var noRepeatFlag = 0;
					if ((generateIn[startCordY][startCordX] == "X") 
					|| (generateIn[startCordY][startCordX] == "O")){
						console.log("3-Repeat");
						continue
					}
					switch (getRandomDirrecton()) {
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
							&& (generateIn[startCordY][startCordX - 3] != "X")){
								console.log("3-1");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX - 1] = "X";
								generateIn[startCordY][startCordX - 2] = "X";
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
							break
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
							&& (generateIn[startCordY + 3][startCordX] != "X"))
							{
								console.log("3-2");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY + 1][startCordX] = "X";
								generateIn[startCordY + 2][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY - 3][startCordX] != "X")){
								console.log("3-3");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY - 1][startCordX] = "X";
								generateIn[startCordY - 2][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY][startCordX + 3] != "X")){
								console.log("3-4");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX + 1] = "X";
								generateIn[startCordY][startCordX + 2] = "X";
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
							break
						default:
							console.log("Err")
							break
					}
					
					if (noRepeatFlag){
						startCordY = undefined;
						startCordX = undefined;
						noRepeatFlag = 0;
						console.log("3-Finished");
						break
					}
				}
		}	
	},
	esmin:  function (generateIn,generateInUnits) {
		for(var i = 0; i < 3; i++){
				while (1) {
					startCordY = getRandomCord();
					startCordX = getRandomCord();
					var noRepeatFlag = 0;
					if ((generateIn[startCordY][startCordX] == "X") 
					|| (generateIn[startCordY][startCordX] == "O")){
						console.log("2-Repeat");
						continue
					}
					switch (getRandomDirrecton()) {
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
							&& (generateIn[startCordY][startCordX - 2] != "X")){
								console.log("2-1");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX - 1] = "X";
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
							break
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
							&& (generateIn[startCordY + 2][startCordX] != "X"))
							{
								console.log("2-2");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY + 1][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY - 2][startCordX] != "X")){
								console.log("2-3");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY - 1][startCordX] = "X";
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
							break
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
							&& (generateIn[startCordY][startCordX + 2] != "X")){
								console.log("2-4");
								generateIn[startCordY][startCordX] = "X";
								generateIn[startCordY][startCordX + 1] = "X";
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
							break
						default:
							console.log("Err")
							break
					}
					
					if (noRepeatFlag){
						startCordY = undefined;
						startCordX = undefined;
						noRepeatFlag = 0;
						console.log("2-Finished");
						break
					}
				}
		}	
	},
	kater:  function (generateIn,generateInUnits) {
		for(var i = 0; i < 4; i++){
				while (1) {
					startCordY = getRandomCord();
					startCordX = getRandomCord();
					var noRepeatFlag = 0;
					if ((generateIn[startCordY][startCordX] == "X") 
					|| (generateIn[startCordY][startCordX] == "O")){
						console.log("1-Repeat");
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
					&& (generateIn[startCordY][startCordX - 1] != "X")){
						console.log("1-1");
						generateIn[startCordY][startCordX] = "X";								
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
					};
					if (noRepeatFlag){
						startCordY = undefined;
						startCordX = undefined;
						noRepeatFlag = 0;
						console.log("1-Finished");
						break
					}
				}
		}	
	},
};
var aiCords = {
	aiField: [
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				
			],	
	aiFieldUnits: [
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				
			],
			// 1 - 4 : kater; 5 - 7 : esmin; 8 - 9 : cruser; 10 : lincor
		cord: [
				[0,0,],    //5 - 0
				[0,0,],	   //6 - 1
				[0,0,],    //7 - 2
				[0,0,0,],  //8 - 3
				[0,0,0,],  //9 - 4
				[0,0,0,0,],//10 - 5
				],
		cordC : [0,0,0,0,0,0,] ,
};
var plCords = {
	playerField: [
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				["&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;",],
				
			],	
	playerFieldUnits: [
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				[0,0,0,0,0,0,0,0,0,0,0,0,],
				
			],
			// 1 - 4 : kater; 5 - 7 : esmin; 8 - 9 : cruser; 10 : lincor
		cord: [
				[0,0,],    //5 - 0
				[0,0,],	   //6 - 1
				[0,0,],    //7 - 2
				[0,0,0,],  //8 - 3
				[0,0,0,],  //9 - 4
				[0,0,0,0,],//10 - 5
				],
		cordC : [0,0,0,0,0,0,] ,
};
function getRandomCord()
{
  return Math.floor(Math.random() * 10) + 1;
}
function getRandomId()
{
  return Math.floor(Math.random() * 100) + 1;
}
function getRandomDirrecton()
{
  return Math.floor(Math.random() * 4) + 1;
}
function returnOnclickId(td) 
{
	switch(controller.turnMarker){
		case "player":
		controller.currentTileClick = td.id;
		console.log("Ai Tile Clicked. ID:" + td.id);
		controller.playerTurn();
		break
		case "ai" :
			document.getElementById("log").innerHTML += "<br>--Дождитесь своего хода";
			break
		case false:
			document.getElementById("log").innerHTML += "<br>--Игра закончена";
	}
}
