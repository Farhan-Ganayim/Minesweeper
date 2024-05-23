'use strict'

var x =

    function getRandomIntInclusive(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min

    }
/*------------------------------------------------------------------*/

function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            
            row.push({
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true
            })

        }
        mat.push(row)
    }
    return mat
}

/*------------------------------------------------------------------*/

function findEmptyPos() {
    // var emptyPoss = [{i:0,j:0},{i:0,j:1}]
    var emptyPoss = []

    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            var cell = gBoard[i][j]
            // console.log(cell);
            if (cell.type === FLOOR && !cell.gameElement) {
                // console.log('cell:', cell)
                var pos = { i: i, j: j }
                emptyPoss.push(pos)
            }
        }
    }
    // console.log('emptyPoss:', emptyPoss)
    var randIdx = getRandomInt(0, emptyPoss.length)
    // console.log('randIdx:', randIdx)
    var randPos = emptyPoss[randIdx]
    // console.log('randPos:', randPos)
    return randPos
}

/*------------------------------------------------------------------*/
function makeId(length = 6) {

    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}
/*------------------------------------------------------------------*/

function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min
}

/*------------------------------------------------------------------*/

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

/*------------------------------------------------------------------*/

function getSelector(coord) {

    return `#cell-${coord.i}-${coord.j}`
}

/*------------------------------------------------------------------*/

function isEmptyCell(coord) {
    // return gBoard[coord.i][coord.j]  === ''
    return !gBoard[coord.i][coord.j]
}
/*------------------------------------------------------------------*/

function getCellCoord(strCellId) {
    const coord = {}
    const parts = strCellId.split('-') // ['cell','2','7']
    coord.i = +parts[1]
    coord.j = +parts[2]
    return coord
}
/*------------------------------------------------------------------*/

function markCells(coords) {
    // console.log('coords:', coords)
    // query select them one by one and add mark 
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i]
        // console.log('coord:', coord) // {i:2,j:0}
        var selector = getSelector(coord) // '#cell-2-0'
        var elCell = document.querySelector(selector)
        // console.log('elCell:', elCell)
        elCell.classList.add('mark')
        
    }
}
/*------------------------------------------------------------------*/
function copyMat(mat) {
    var newMat = []
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = []
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j]
        }
    }
    return newMat
}