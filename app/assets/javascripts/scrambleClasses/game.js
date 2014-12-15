var game = {
	board: "",
	makeBoard: function() {
		this.board = new Board();
	},
	start: function() {
		this.makeBoard();
		this.board.startGame();
		// this.render();
	}
};


// var selectLetters = function() {
// 	$
// }

// $('.die').click(function() {
// 	alert($this).text());
// });