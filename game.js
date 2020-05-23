let bomb = '<span class="bombImage"> &#128163 </span>'; 
let flag = '<span class="flagImage"> &#9872 </span>'; 

let SIZE = 4;
let timer = false
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function gameOver() {
//   if ()
// }


function buildBoard() {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
      board.push([]);
      for (var j = 0; j < SIZE; j++) {
        board[i][j] = returnObj();
      }
    }
    board[getRandomInt(0, 3)][getRandomInt(0, 3)].isMine = true;
    board[getRandomInt(0, 3)][getRandomInt(0, 3)].isMine = true;
    return board;
  }
let gboard = buildBoard();
console.log(gboard)


function printMat(mat, selector) {
    var strHTML = ' <div class="timer" time="0">Time: 0</div> <table class="chart" border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < mat[0].length; j++) {
        var cell = mat[i][j];
        var className = 'cell cell' + i + '-' + j;
        if (cell.isMine === true) {
            className += ' bomb'
        }
        strHTML += '<td row= "' + i + '"  column= "' + j + '" onclick="cellClicked(this)" oncontextmenu="plantFlag(this)" class="' + className + '"> '  +  bomb + flag + '</td>'
      }
      strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
  }
printMat(gboard ,'.board-container',)

function plantFlag(td) {
  td.querySelector('.flagImage').style.display = 'block'
  if (td.classList.contains('bomb')) {
    td.querySelector('.bombImage').style.display = 'block'
  }
}

function cellClicked(td) {
  if (timer === false) {
    timer = setInterval(function() {
      var timerElement = document.querySelector('.timer');
      var currentTime = timerElement.getAttribute('time');
      var nextTime = parseInt(currentTime) + 1;
      timerElement.setAttribute('time', nextTime)
      timerElement.innerHTML = "Time: " + nextTime
    }, 1000);
  }
  let row = parseInt(td.getAttribute("row"))
  let column = parseInt(td.getAttribute("column"))
  let Mcount = setMinesNegsCount(gboard, row, column)
  // document.querySelector('.minesCount').innerHTML = "Mines around: " + Mcount;
    if (td.classList.contains('bomb')){
       let bombs = document.querySelectorAll('.bomb .bombImage' )
       for (var i = 0; i < bombs.length; i++) {
         bombs[i].style.display = 'block'
       }
        td.querySelector('span').style.display = "block";
        clearInterval(timer)
    }    
    else {
      td.innerHTML = Mcount;
    }
}

function returnObj() {
    
    return  {
        minesAroundCount: 0, 
        isShown: true, 
        isMine: false, 
        isMarked: true
    };
}

function setMinesNegsCount(board, row, column) {
  let counterBomb = 0;
   console.log(board[row][column])
  //  one right
   if (board[row][column + 1] && board[row][column + 1].isMine === true) {
     counterBomb += 1;
   }
  // one left 
   if (board[row][column - 1] && board[row][column - 1].isMine === true) {
    counterBomb += 1;
  }
  //  one top
  if (board[row - 1] && board[row - 1][column] && board[row - 1][column].isMine === true) {
    counterBomb += 1;
  }
  // one bottom
  if (board[row + 1] && board[row + 1][column] && board[row + 1][column].isMine === true) {
    counterBomb += 1;
  }
  // one top one left
  if (board[row - 1] && board[row - 1][column - 1] && board[row - 1][column - 1].isMine === true) {
    counterBomb += 1;
  }
  // one bottom one left
  if (board[row + 1] && board[row + 1][column - 1] && board[row + 1][column - 1].isMine === true) {
    counterBomb += 1;
  }
  // one bottom one right
  if (board[row - 1] && board[row - 1][column + 1] && board[row - 1][column + 1].isMine === true) {
    counterBomb += 1;
  }     
  // one top one right
  if (board[row + 1] && board[row + 1][column + 1] && board[row + 1][column + 1].isMine === true) {
    counterBomb += 1;
  }
  return counterBomb;
}
