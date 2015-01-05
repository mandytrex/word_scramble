function Board() {
	this.tiles = [];
}

Board.prototype.createBoard = function() {
			newBoard = new Die();
			newBoard.setState();
			for (i=0; i < 16; i++) {
				var eachDice = newBoard.dice[i];
				this.tiles.push(eachDice);
			}
};


Board.prototype.render = function() {
	var gameboard = [
		'|'+ this.tiles[0] +'|'+ this.tiles[1] +'|'+ this.tiles[2]+ '|' + this.tiles[3]+ '|',
		'|'+ this.tiles[4] +'|'+ this.tiles[5] +'|'+ this.tiles[6]+'|' + this.tiles[7]+ '|',
		'|'+ this.tiles[8] +'|'+ this.tiles[9] +'|'+ this.tiles[10]+'|' + this.tiles[11]+ '|',
		'|'+ this.tiles[12] +'|'+ this.tiles[13] +'|'+ this.tiles[14]+'|' + this.tiles[15]+ '|',
	];
	return gameboard.join('\n');
};

