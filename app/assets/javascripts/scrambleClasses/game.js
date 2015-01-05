var game = {
	board: "",
	makeBoard: function() {
		this.board = new Board();
	},
	start: function() {
		this.makeBoard();
		this.board.createBoard();
		// this.render();
	}
};






