'use strict'

/*var MINE = '<img src="img/mine.png"/>'  how to make the img size fit the td */
var MINE = '*'
console.log(MINE)

var gLevel = {
    SIZE: 12,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard = createMat(gLevel.SIZE, gLevel.SIZE)  /* Edited createMat to already contain the objects */


gBoard[1][2].isMine = true
gBoard[3][3].isMine = true

console.log(gBoard)

renderBoard()



function renderBoard() {

    var strHTML = ''
    var inCell = ''
    var length = gLevel.SIZE
    var classOpened = ''

    for (var i = 0; i < length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < length; j++) {
            if (gBoard[i][j].isShown) {
                classOpened = 'opened'

                if (gBoard[i][j].isMine) {
                    inCell = MINE
                }
                else {
                    inCell = gBoard[i][j].minesAroundCount
                }

                
                



            }


            strHTML += `<td onclick="onCellClicked(this,${i},${j})" class=>${classOpened}

                          
                    </td>`

        }
        strHTML += '</tr>'
    }
    var elContainer = document.querySelector('tbody')
    elContainer.innerHTML = strHTML
}


/*------------------------------------------------------------------*/
function onCellClicked(elCell, i, j) {
    // if gGame.isOn

    var cell = gBoard[i][j]
    cell.isShown = true;

    // if (cell.isMine)




}
/*------------------------------------------------------------------*/

function setMinesNegsCount(cellI, cellJ, board) {
    var count = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j].isMine === true) count++
        }
    }
    return count
}
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/



