'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./games/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  events.addHandlers()
})

$(document).ready(function(){
    var turnCount = 0;

      $('#board').find('td').on('click', function(){
if (check($(this).text()))
{  // check($(this).text());     // update game here

            if (turnCount % 2 === 0){
              $(this).text('X');
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O')
              checkVictory('O')
            }
          turnCount++;
    }


});

// it check if text is in the square
    function check(square){
      console.log(square);
      if (square == '')
        return true;
      else {
        return false;
      }



    }

    function checkVictory(player){

       //top row check
      if ($('#board').find('#1').text() !== ''){
        if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
          if ($('#board').find('#1').text() == $('#3').text()) {
            alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        //left column check
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        //left diagonal check
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#1').text() == $('#9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
          }

       //middle column check
        if ($('#board').find('#2').text() !== ''){
            if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#2').text() == $('#8').text()) {
                    alert('Game over! '+player+' is the winner!');
    $('#newGame').removeClass('invisible');
                }
            }
        }

        //right column check
        if ($('#board').find('#3').text() !== ''){
            if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                if ($('#board').find('#3').text() == $('#9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
            //right diag check
            if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#3').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //middle row check

        if ($('#board').find('#4').text() !== ''){
            if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#4').text() == $('#6').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //bottom row check
        if ($('#board').find('#7').text() !== ''){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

    }
    $('#newGame').on('click',function(){
        $('.square').text('')
    })

})
