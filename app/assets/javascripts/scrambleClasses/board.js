function Board() {
	this.blocks = [];
}

Board.prototype.startGame = function() {
			newDie = new Die();
			newDie.setState();
			for (i=0; i < 16; i++) {
				var eachDice = newDie.dice[i];
				this.blocks.push(eachDice);
			}
};


Board.prototype.render = function() {
	var gameboard = [
		'|'+ this.blocks[0] +'|'+ this.blocks[1] +'|'+ this.blocks[2]+ '|' + this.blocks[3]+ '|',
		'|'+ this.blocks[4] +'|'+ this.blocks[5] +'|'+ this.blocks[6]+'|' + this.blocks[7]+ '|',
		'|'+ this.blocks[8] +'|'+ this.blocks[9] +'|'+ this.blocks[10]+'|' + this.blocks[11]+ '|',
		'|'+ this.blocks[12] +'|'+ this.blocks[13] +'|'+ this.blocks[14]+'|' + this.blocks[15]+ '|',
	];
	return gameboard.join('\n');
};
