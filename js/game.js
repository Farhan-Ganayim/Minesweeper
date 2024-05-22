'use strict'

var MINE = '<img src="img/mine.png"/>' /* how to make the img size fit the td */
var tempMine = '*'
console.log(MINE)

var gLevel = {
    SIZE: 4,
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
    var length = gLevel.SIZE

    for (var i = 0; i < length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < length; j++) {
            var cell = gBoard[i][j]
            if (cell.isMine)
                strHTML += `<td onclick="onCellClicked(this)">
                            ${tempMine}
                            </td>`
            // strHTML += `<td onclick="onCellClicked(this)"> 

            //         ${MINE}
            //         </td>`
            else {

            strHTML += `<td onclick="onCellClicked(this)">
            ${setMinesNegsCount(i,j,gBoard)}
                                 </td>`
            }

        }
        strHTML += '</tr>'
    }
    var elContainer = document.querySelector('tbody')
    elContainer.innerHTML = strHTML
}


/*------------------------------------------------------------------*/

function setMinesNegsCount(cellI, cellJ, board) {
    var count = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j].isMine===true) count++
        }
    }
    return count
}
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/



