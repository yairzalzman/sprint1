let SIZE = 4;
let cell = {
    minesAroundCount: 4, 
    isShown: true, 
    isMine: false, 
    isMarked: true
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
      board.push([]);
      for (var j = 0; j < SIZE; j++) {
        board[i][j] = cell;
      }
    }
    return board;
  }
let gboard = buildBoard();


function printMat(mat, selector) {
    var strHTML = '<table class="chart" border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < mat[0].length; j++) {
        var cell = mat[i][j];
        var className = 'cell cell' + i + '-' + j;
        strHTML += '<td class="' + className + '"> '  + ' </td>'
      }
      strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
  }
printMat(gboard ,'.board-container')
