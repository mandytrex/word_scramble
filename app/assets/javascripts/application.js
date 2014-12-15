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

$(function() {
  // console.log("Working!");
  startGame();
  $('.start').on('click', function() {
		makeGame();
  	fillBoard();
  	setTimeout('decreaseTime()',1000);
  });
  $( ".boggle-board" ).on( "click", ".die", selectLetter1);
})



var makeGame = function() {
  for(var row = 0; row < 4; row++) {
    var rowDiv = $('<div>').addClass('row').appendTo($('body'))
    for(var col = 0; col < 4; col++) {
      var column = $('<div>').addClass('die').attr('id', row * 4 + col)
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

var selectLetter1 = function() {
	var letter1 = $(this).text();
	console.log(letter1);
};

var mins = 3;  //Set the number of minutes you need
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;
 

var decreaseTime = function () {
  currentMinutes = Math.floor(secs / 60);
  currentSeconds = secs % 60;
   if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
   	 secs--;
    $("p.timer").text("Time Left: " + currentMinutes + ":" + currentSeconds); //Set the element id you need the time put into.
   if(secs !== -1) setTimeout('decreaseTime()', 1000);
 }




