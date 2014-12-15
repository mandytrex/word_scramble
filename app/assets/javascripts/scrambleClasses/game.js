var game = {
	board: "",
	makeBoard: function() {
		this.board = new Board();
	},
	start: function() {
		this.makeBoard();
		this.board.startGame();
		// this.render();
	},
	addLetter: function() {
			// var dice = $(".row").find(".dice");
			// var id = Number($(this).attr('id'));
			// // Number or parseInt
			// var tileLetter = game.board.tiles;
			// $('.die').text(tileLetter);
			var tileLetterArray = game.board.tiles;
				for (i=0; i < tileLetterArray.length; i++) {
					var diceIndex = i;
					var diceElement = $('<div>' + tileLetterArray[i]+ '</div>').addClass('die').attr('id', diceIndex);
					$('body').append(diceElement);
			}
		}
};

