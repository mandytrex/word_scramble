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


// Possible dice routes
// 0 -- [4, 1]
// 1 -- [0, 5, 2]
// 2 -- [1, 6, 3]
// 3 -- [2, 7]
// 4 -- [0, 5, 8]
// 5 -- [1, 4, 6, 9]
// 6 -- [2, 5, 7, 10]
// 7 -- [3, 6, 11]
// 8 -- [4, 9, 12]
// 9 -- [5, 8, 10, 13]
// 10 -- [6, 9, 11, 14]
// 11 -- [7, 10, 15]
// 12 -- [8, 13]
// 13 -- [9, 12, 14]
// 14 -- [10, 13, 15]
// 15 -- [11, 14]


// // die 0 [4, 1]
// if (currentDieIndex !== 0) {
// 	die =
// }







