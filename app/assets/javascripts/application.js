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
  console.log("Working!");
  $('.start').on('click', function() {
  	startGame();
  });
});

// var makeGame = function() {
//   for(var row = 0; row < 4; row++) {
//     var rowDiv = $('<div">').addClass('row').appendTo($('body'))
//     for(var col = 0; col < 4; col++) {
//       $('<div>').addClass('die').attr('id', row * 4 + col).appendTo(rowDiv);
//     }
//   }
//   $(rowDiv).appendTo($('body'));
// };

var startGame = function() {
  game.start();
  game.addLetter();
}