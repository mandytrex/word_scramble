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
//= require turbolinks
//= require_tree .
//= scrambleClasses/game.js
//= scrambleClasses/die.js
//= scrambleClasses/board.js

if ($('#hidden-game-div')) {
	$(function() {
		$.get('/games').done(renderGames);
	  // console.log("Working!");
	  startGame();
	  $('.start').on('click', function() {
	  	$('.start').hide();
			makeGame();
	  	fillBoard();
	  	alert("You have 2 Minutes!");
	  	setTimeout('decreaseTime()',1000);
	  });
	  $( ".boggle-board" ).on("mousedown", ".die", function() {
	   	buildAWord($(this));
	   });
	  $( "body" ).on("click", ".submit-word", function() {
	   	submitWord();
	   	currentString = "";
	   	currentDieIndex = null;
	   	$('p.word-build').empty();
	   	$('div.die').removeClass('not-playable');
	   	$('div.die').addClass('playable');
	   });
		$('.undo').on('click', undoWord);
		// $.get('/games').done(renderGames);
	})
}

//array of guessed words
var guessedWords = [];
//current word
var currentString = "";
//score
var score = 0;
//if string is being currently built
mousedown = 0;
//last clicked die div
var die;
//index of last clicked die
var currentDieIndex = null;


var makeGame = function() {
  for(var row = 0; row < 4; row++) {
    var rowDiv = $('<div>').addClass('row').appendTo($('body'))
    for(var col = 0; col < 4; col++) {
      var column = $('<div>').addClass('die').addClass('playable').attr('id', row * 4 + col)
      column.appendTo(rowDiv);
  		$(rowDiv).appendTo($('.boggle-board'));
    }
  }
};

var startGame = function() {
  game.start();
}

var fillBoard = function() {
	var letterArray = game.board.tiles;
	var letter0 = letterArray[0];
	var letter1 = letterArray[1];
	var letter2 = letterArray[2];
	var letter3 = letterArray[3];
	var letter4 = letterArray[4];
	var letter5 = letterArray[5];
	var letter6 = letterArray[6];
	var letter7 = letterArray[7];
	var letter8 = letterArray[8];
	var letter9 = letterArray[9];
	var letter10 = letterArray[10];
	var letter11 = letterArray[11];
	var letter12 = letterArray[12];
	var letter13 = letterArray[13];
	var letter14 = letterArray[14];
	var letter15 = letterArray[15];
	$('div#0').append(letter0);
	$('div#1').append(letter1);
	$('div#2').append(letter2);
	$('div#3').append(letter3);
	$('div#4').append(letter4);
	$('div#5').append(letter5);
	$('div#6').append(letter6);
	$('div#7').append(letter7);
	$('div#8').append(letter8);
	$('div#9').append(letter9);
	$('div#10').append(letter10);
	$('div#11').append(letter11);
	$('div#12').append(letter12);
	$('div#13').append(letter13);
	$('div#14').append(letter14);
	$('div#15').append(letter15);
}


var mins = 1;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;
 
var decreaseTime = function () {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;
   if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
   	 secs--;
   	 $('div.timer').attr('id', 'timer-border');
    $("p.timer").text("Time Left: " + currentMinutes + ":" + currentSeconds);
   if ((Number(currentSeconds) === 0) && (currentMinutes === 0)) {
   	alert("TIME'S UP! Game over. Refresh to play again.");
   		$('div.die').removeClass('playable');
	   	$('div.die').addClass('not-playable');
	   	var reset = $('<p>').addClass('refresh').text('REFRESH TO PLAY AGAIN :)');
	   	$('div.position').prepend(reset);
   } 
   if(secs !== -1) setTimeout('decreaseTime()', 1000);
 }


var buildAWord = function(event) {
 	die = event;
 	console.log("Current Letter: " + die.text());
 	//index(ID) of current die

 	if (die.hasClass('playable') && checkAdjacent() == true) {
 		// var dieLetter = $('<p>').text(die.text());
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

var undoWord = function() {
			currentString = "";
	   	currentDieIndex = null;
	   	$('p.word-build').empty();
	   	$('div.die').removeClass('not-playable');
	   	$('div.die').addClass('playable');
}

//checks for touching dice
var checkAdjacent = function() {
	 // debugger
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


//verifies a word is in dictionary & adds points to score for valid words
var verifyWord = function() {
	var word = currentString;
		for (d=0; d < boggleDictionary.length; d++) {	
			if (word.toLowerCase() === boggleDictionary[d]) {
				if (word.length <= 3) {
					score += 2;	
				}
				if (word.length === 4) {
					score += 4;
				}
				if (word.length === 5) {
					score += 6;
				}
				if (word.length === 6) {
					score += 8;
				}
				if (word.length >= 7) {
					score += 10;
				}
				var listItem = $('<p>').addClass('verified-word').text(currentString);
				$('.word-list').append(listItem);
			}
 		}	
	}

function submitWord(){
	if (mousedown == 1){
		// if the word is long enough, add it to the word list
		if (currentString.length >= 3){
			guessedWords.push(currentString);
			verifyWord();
		}

		if (score >= 0) {
			$('p.score').text('Score: ' + score);
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

// var newScore = $('p.score').val();
// //   var gameData = {
// //     note: {
// //     	user_id: game.user_id,
// //       total_score: newScore
// //     }
// //   };

// var renderUsers = function(users) {
//   users.forEach(function(user) {
//     var id = user.id;
//   });
// };

// // var loadGame = function(noteId) {
// //   // This ajax request will only receive a successful response if I am logged in
// //   // and I am the correct user, etc. If successful, the note I just received will
// //   // be rendered on the page.
// //   $.get('/games/' + gameId).done(renderGames);
// // };


// $.get('/users/' + userId).done(renderUsers);

// // var createGame = function() {
// // // Assemble data
// //   var newScore = $('p.score').val();
// //   var gameData = {
// //     note: {
// //     	user_id: current_user.id,
//       total_score: newScore
//     }
//   };

// // Send the post request to create a new note
//   $.post('/games', gameData)
//   .done(function() {
//   	score.val('')
//   })
// }

// $.ajax({
// 	url: '/games/' +
// })




