let bomb = '<span> &#128163 </span>'; 
let SIZE = 4;

function buildBoard() {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
      board.push([]);
      for (var j = 0; j < SIZE; j++) {
        board[i][j] = returnObj();
      }
    }
    board[0][2].isMine = true;
    return board;
  }
let gboard = buildBoard();
console.log(gboard)


function printMat(mat, selector) {
    var strHTML = '<table class="chart" border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < mat[0].length; j++) {
        var cell = mat[i][j];
        var className = 'cell cell' + i + '-' + j;
        if (cell.isMine === true) {
            className += ' bomb'
        }
        strHTML += '<td onclick="cellClicked(this)" class="' + className + '"> '  +  bomb + '</td>'
      }
      strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
  }
printMat(gboard ,'.board-container',)

function cellClicked(td) {
    if (td.classList.contains('bomb')){
        td.querySelector('span').style.display = "block";
    }
    console.log('bbye')
}

function returnObj() {
    
    return  {
        minesAroundCount: 0, 
        isShown: true, 
        isMine: false, 
        isMarked: true
    };
}

function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++ ){
        for(var j = 0; j < board[i].length; j++){
           board[i][j]
           console.log(setMinesNegsCount(board))
        }
    }    
}