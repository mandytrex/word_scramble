function Die() {
	this.dice = null;
}


Die.prototype.setState = function() {
var allDice = [
			["A", "E", "A", "N", "E", "G"],
			["A", "H", "S", "P", "C", "O"],
			["A", "S", "P", "F", "F", "K"],
			["O", "B", "J", "O", "A", "B"],
			["I", "O", "T", "M", "U", "C"],
			["R", "Y", "V", "D", "E", "L"],
			["L", "R", "E", "I", "X", "D"],
			["E", "I", "U", "N", "E", "S"],
			["W", "N", "G", "E", "E", "H"],
	 		["L", "N", "H", "N", "R", "Z"],
			["T", "S", "T", "I", "Y", "D"],
			["O", "W", "T", "O", "A", "T"],
			["E", "R", "T", "T", "Y", "L"],
			["T", "O", "E", "S", "S", "I"],
			["T", "E", "R", "W", "H", "V"],
			["N", "U", "I", "H", "M", "Qu"]];

	diceArray = [];
	for (i = 0; i < allDice.length; i++) { 
		random = allDice[i][Math.floor(Math.random() * allDice[i].length)];
		diceArray.push(random); 
		}
	this.dice = diceArray;
};

Die.prototype.render = function() {
	return this.dice.value;
};



