<script setup>
import { ref, watch } from 'vue'
import score from './Score.vue'
import playerChooser from './PlayerChooser.vue'
import audio from './audio'

class Cell {
    constructor(mark, coord) {
        this.mark = mark;
        this.coord = coord
        this.isTris = false
    }
    disabled() {
        this.mark = ' '
    }
    reset() {
        this.mark = ''
    }
    checkTris(boolean) {
        this.isTris = boolean
    }
}

const board =
    ref([
        [new Cell('', [1, 4, 7]), new Cell('', [1, 5]), new Cell('', [1, 6, 8]),],
        [new Cell('', [2, 4]), new Cell('', [2, 5, 7, 8]), new Cell('', [2, 6]),],
        [new Cell('', [3, 4, 8]), new Cell('', [3, 5]), new Cell('', [3, 6, 7]),]
    ]);
// ----------------------------------------------------------------
const turn = ref(0)
const movesOfX = ref([])
const movesOfO = ref([])
const winner = ref(false) //= draw, markX, markO
const mark = ref('❌') //= markX, markO
const currentScore = ref({
    scoreX: 0,
    scoreO: 0
})

let draw = 'Oh, no! It\'s draw!';
let markX = '❌';
let markO = '🔵';
// ---------------------------------------------------------------------



watch(turn, (newTurn) => {
    if (newTurn === 9 && !winner.value) {
        winner.value = draw
    }
    if (newTurn % 2 === 0) {

        if (newTurn !== 0) {
            audio.circle.play()
        }
        mark.value = markX
    } else {

        audio.cross.play()
        mark.value = markO
    }
})

watch(winner, (newWinner) => {
    if (newWinner === markX || newWinner === markO) {
        audio.win.play()
    } else if (newWinner === draw) {
        audio.draw.play()
    }
})
// ----------------------------------------------------------------------

function checkWinner(iRow, iCell, movesOf) {
    board.value[iRow][iCell].coord.forEach(el => {
        let itemsFound = movesOf.value.filter((e) => {
            return e == el;
        }).length;
        if (itemsFound >= 2) {
            
            board.value.forEach(row => {
                row.forEach(cell => {
                    if (cell.coord.includes(el)) {
                        cell.checkTris(true)
                    }

                    if (!cell.mark) {
                        cell.disabled()
                        
                    }
                })
            })
            winner.value = mark.value;
            (mark.value === markX) ? currentScore.value.scoreX++ : currentScore.value.scoreO++
        } else {

        }
    })
}

function move(iCell, iRow) {
    let movesOf
    if (mark.value === markX) {
        movesOf = movesOfX
    } else {
        movesOf = movesOfO
    }
    board.value[iRow][iCell].mark = mark.value
    checkWinner(iRow, iCell, movesOf)
    turn.value++
    movesOf.value.push(...board.value[iRow][iCell].coord);
}
// ----------------------------------------------------------------------

function resetAll() {
    movesOfX.value = []
    movesOfO.value = []
    turn.value = 0
    winner.value = false

}

function retry() {
    board.value.forEach(row => {
        row.forEach(cell => {
            cell.reset();
            cell.checkTris(false)


        })
    })
    resetAll()
    directionRandom()
    animation()
}
// ----------------------------------------------------------------------

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
const direction = ['left', 'right']
const firstPlayer = ref(direction.random())
function directionRandom() {
    firstPlayer.value = direction.random()
}

// trigger per l'animazione del player-chooser
const anim = ref(false)

function animation() {
    anim.value = true
    setTimeout(() => {
        anim.value = false
    }, 5000);

}
animation()
</script>


<template>
    <score v-bind="currentScore" />
    <div class="turn" v-show="!winner">place {{ mark }} <br> &nbsp; <br> &nbsp; <br> &nbsp;
    </div>

    <div class="winner" v-show="winner">
        <span> the winner is... <br> {{ winner }} </span> <br>
        <button class="retry" @click="retry">RETRY</button>
    </div>
    <div class="board">
        <div class="row" v-for="(row, iRow) of board" :key="iRow">
            <button class="cell" :class="{tris : cell.isTris}" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell"
                :disabled="cell.mark != ''">{{ cell.mark }}
            </button>
        </div>
    </div>
    <playerChooser @click="anim = false"  :first-player="firstPlayer" :anim="anim" />
</template>


<style>
.retry {
    margin-top: 10px;
    margin-left: 10px;
    width: 100px;
    height: 32px;
    border: none;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
}

.cell {

    width: 150px;
    height: 150px;
    border: 3px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 0, 0, 0.0);
    font-size: 28pt;
}

@media screen and (max-width: 780px) {
    .cell {
        width: 100px;
        height: 100px;
    }

}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cell:nth-child(1) {
    border-left: none
}

.cell:nth-child(3) {
    border-right: none
}

.row:nth-child(1)>.cell {
    border-top: none
}

.row:nth-child(3)>.cell {
    border-bottom: none
}

.tris {
    background-color: rgb(255, 255, 255);
        
}
</style>