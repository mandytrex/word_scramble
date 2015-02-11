// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery-ui
//= require_tree .
//= scrambleClasses/game.js
//= scrambleClasses/die.js
//= scrambleClasses/board.js

if ($('#hidden-game-div')) {
$(function() {
  console.log('i am working');
  $('.start').on('click', function() {
  	$('.start').hide();
	 	$('#instruction-modal').fadeIn(500);
	  $('.close-instruction').on('click', function() {
	  	$('#instruction-modal').fadeOut(150);
	  	emptyGame();
	  	$('.boggle-board').show();
	  	startGame();
	  	threeMinuteTimer();
	 	 });
	  });
  	$('.close-game').on('click', function() {
  		$('#game-over-modal').fadeOut(150);
  		$('.submit-word').hide();
  		$('.undo').hide();
  		$('.boggle-board').hide();
	  	$('.start').val('New Game');
	  	$('.start').show();
	 	 });
  	$('.new-game').on('click', function() {
  		newGame();
	  });
	  $('.boggle-board').on('mousedown', '.die', function() {
	   	buildAWord($(this));
	   });
	  $('body').on('click', '.submit-word', function() {
	   	submitWord();
	   	currentString = "";
	   	currentDieIndex = null;
	   	$('p.word-build').empty();
	   	$('div.die').removeClass('not-playable');
	   	$('div.die').addClass('playable');
	   });
		$('.undo').on('click', undoWord);
		$.get('/games').done(renderGames);
		})
	}

//HELPER VARIABLES
//array of guessed words (valid & invalid)
guessedWords = [];
//current word being built
var currentString = "";
//score
var score = 0;
//if string is being currently built
mousedown = 0;
//last clicked die div
var die;
//index of last clicked die
var currentDieIndex = null;

//START game by generating array of 16 dice
var startGame = function() {
  game.start();
  makeGame();
  fillBoard();
  $('.submit-word').fadeIn(300);
  $('.undo').fadeIn(300);
}

//CLEARS current game
var emptyGame = function() {
	$('.boggle-board').empty();
	$('p.timer').text("");
	$('p.game-score').text('0');
	$('p.word-build').empty();
	$('p.accepted-words').empty();
}

//Function called to start a NEW game
var newGame = function() {
	$('#game-over-modal').fadeOut(150);
	  	emptyGame();
	  	startGame();
	  	threeMinuteTimer();
}

// adds the board to html page
var makeGame = function() {
  for(var row = 0; row < 4; row++) {
    var rowDiv = $('<div>').addClass('row-die').appendTo($('body'))
    for(var col = 0; col < 4; col++) {
      var column = $('<div>').addClass('die').addClass('playable').attr('id', row * 4 + col)
      column.appendTo(rowDiv);
  		$(rowDiv).appendTo($('.boggle-board'));
    }
  }
};

//inserts dice from the array into  proper div on document

var fillBoard = function() {
	var letterArray = game.board.tiles;
	$('div.die').effect('shake');
	$('.die').eq(0).append(letterArray[0]);
	$('.die').eq(1).append(letterArray[1]);
	$('.die').eq(2).append(letterArray[2]);
	$('.die').eq(3).append(letterArray[3]);
	$('.die').eq(4).append(letterArray[4]);
	$('.die').eq(5).append(letterArray[5]);
	$('.die').eq(6).append(letterArray[6]);
	$('.die').eq(7).append(letterArray[7]);
	$('.die').eq(8).append(letterArray[8]);
	$('.die').eq(9).append(letterArray[9]);
	$('.die').eq(10).append(letterArray[10]);
	$('.die').eq(11).append(letterArray[11]);
	$('.die').eq(12).append(letterArray[12]);
	$('.die').eq(13).append(letterArray[13]);
	$('.die').eq(14).append(letterArray[14]);
	$('.die').eq(15).append(letterArray[15]);
}


// TIMER FUNCTION
var threeMinutes = 60 * 2,
mins, seconds;

var threeMinuteTimer = function() {
	timer = setInterval(function() {
  mins = parseInt(threeMinutes / 60)
  seconds = parseInt(threeMinutes % 60);
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  $('p.timer').text("Time Left: " + mins + ":" + seconds);
  threeMinutes --;

  if (threeMinutes < 0) {
  	clearTimeout(timer);
  	threeMinutes = 60 * 2;
  	var winningScore = $('p.game-score').text();
  	createGameHistory();
  	$('p.final-score').text("Final Score: " + winningScore);
  	$('#game-over-modal').fadeIn(150);
   	 }
 }, 1000);
}


//allows users to BUILD words to guess
var buildAWord = function(event) {
 	die = event;
 	console.log("Current Letter: " + die.text());
 	//index(ID) of current die

 	if (die.hasClass('playable') && checkAdjacent() == true) {
 		$('p.word-build').append(die.text());
 		die.removeClass('playable');
 		die.addClass('not-playable');
 		currentDieIndex = Number(die.attr('id'));
 		console.log("Current Die Index: " + currentDieIndex);
 		currentString = currentString.concat(die.text());
 		console.log(currentString);
 			if (mousedown == 0) {
 				mousedown++;
 			}	
 		}
 };

// UNDO the building of a current
var undoWord = function() {
			currentString = "";
	   	currentDieIndex = null;
	   	$('p.word-build').empty();
	   	$('div.die').removeClass('not-playable');
	   	$('div.die').addClass('playable');
}


// permits only legal game moves
var checkAdjacent = function() {
	 if (currentDieIndex === null ) {
	 		return true;
	 }

	 if ((currentDieIndex === 0) 
	 	&& (Number(die.attr('id')) === 4 
	 		|| Number(die.attr('id')) === 1 
	 		|| Number(die.attr('id')) === 5 ))	{
			 		return true;
			 } 

	 if ((currentDieIndex === 1) 
	 	&& (Number(die.attr('id')) === 0 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 2 
	 		|| Number(die.attr('id')) === 4 
	 		|| Number(die.attr('id')) === 6 ))	{
			 	  return true;
			 }

	 if ((currentDieIndex === 2) 
	 	&& (Number(die.attr('id')) === 1 
	 		|| Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 3 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 7 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 3) 
	 	&& (Number(die.attr('id')) === 2 
	 		|| Number(die.attr('id')) === 7 
	 		|| Number(die.attr('id')) === 6 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 4) 
	 	&& (Number(die.attr('id')) === 0 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 8 
	 		|| Number(die.attr('id')) === 1 
	 		|| Number(die.attr('id')) === 9 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 5) 
	 	&& (Number(die.attr('id')) === 1 
	 		|| Number(die.attr('id')) === 4 
	 		|| Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 0 
	 		|| Number(die.attr('id')) === 2 
	 		|| Number(die.attr('id')) === 8 
	 		|| Number(die.attr('id')) === 10 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 6) 
	 	&& (Number(die.attr('id')) === 2 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 7 
	 		|| Number(die.attr('id')) === 10 
	 		|| Number(die.attr('id')) === 1 
	 		|| Number(die.attr('id')) === 3 
	 		|| Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 11 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 7) 
	 	&& (Number(die.attr('id')) === 3 
	 		|| Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 11 
	 		|| Number(die.attr('id')) === 2 
	 		|| Number(die.attr('id')) === 10 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 8) 
	 	&& (Number(die.attr('id')) === 4 
	 		|| Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 12 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 13 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 9) 
	 	&& (Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 8 
	 		|| Number(die.attr('id')) === 10 
	 		|| Number(die.attr('id')) === 13 
	 		|| Number(die.attr('id')) === 4 
	 		|| Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 12 
	 		|| Number(die.attr('id')) === 14 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 10) 
	 	&& (Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 11 
	 		|| Number(die.attr('id')) === 14 
	 		|| Number(die.attr('id')) === 5 
	 		|| Number(die.attr('id')) === 7 
	 		|| Number(die.attr('id')) === 13 
	 		|| Number(die.attr('id')) === 15 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 11) 
	 	&& (Number(die.attr('id')) === 7 
	 		|| Number(die.attr('id')) === 10 
	 		|| Number(die.attr('id')) === 15 
	 		|| Number(die.attr('id')) === 6 
	 		|| Number(die.attr('id')) === 14 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 12) 
	 	&& (Number(die.attr('id')) === 8 
	 		|| Number(die.attr('id')) === 13 
	 		|| Number(die.attr('id')) === 9 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 13) 
	 	&& (Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 12 
	 		|| Number(die.attr('id')) === 14 
	 		|| Number(die.attr('id')) === 8 
	 		|| Number(die.attr('id')) === 10 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 14) 
	 	&& (Number(die.attr('id')) === 10 
	 		|| Number(die.attr('id')) === 13 
	 		|| Number(die.attr('id')) === 15 
	 		|| Number(die.attr('id')) === 9 
	 		|| Number(die.attr('id')) === 11 ))	{
			 		 return true;
			 }

	 if ((currentDieIndex === 15) 
	 	&& (Number(die.attr('id')) === 11 
	 		|| Number(die.attr('id')) === 14 
	 		|| Number(die.attr('id')) === 10 ))	{
			 		 return true;
			 }
	 else {
			 		 return false;
			 }
}

//verifies word in dictionary & adds points to score for verified words
var verifyWord = function() {
	var word = currentString.toLowerCase();
		for (d=0; d < boggleDictionary.length; d++) {	
			if ( (word) === (boggleDictionary[d]) ) {
				if (word.length <= 3) {
					score += 2;	
				}
				if (word.length === 4) {
					score += 4;
				}
				if (word.length === 5) {
					score += 6;
				}
				if (word.length >= 6) {
					score += 8;
				}
				var listItem = $('<p>').addClass('accepted-word').text(currentString);
				$('.accepted-words').append(listItem);
			}
 		}	
	}

//SUBMIT a word - accepts and updates screen score IF word is verified
function submitWord(){
	if (mousedown == 1){
		// if the word is long enough, add it to the word list
		if (currentString.length >= 3){
			if (($.inArray(currentString, guessedWords)) != -1 ) {
				console.log('invalid word - already guessed');
			}
			else {
				guessedWords.push(currentString);
				verifyWord();
			}
		}

		if (score >= 0) {
			$('p.game-score').text(score);
		}
	}
}

// GAME HISTORY FUNCTIONS
var renderGames = function(games) {
  games.forEach(function(game) {
    var scores = $('<p>').text("Score: " + game.total_score).attr('id', game.id);
    scores.addClass('past-scores');
    scores.appendTo($('.game-history'));
  });
};

var createGameHistory = function() {
	var currentGameScore = Number($('p.game-score').text());
	var gameData = {
		game: {
			total_score: currentGameScore
		}
	};

 $.post('/games', gameData).done(function(game) {
    // Add a new score to the game history div
    var scores = $('<p>').text("Score: " + game.total_score).attr('id', game.id);
    scores.addClass('past-scores');
    scores.appendTo($('.game-history'));

    // Render the new score in game history view area
    renderGames(game);
  });
}