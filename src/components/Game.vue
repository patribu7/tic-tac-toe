<script setup>
import { ref, watch } from 'vue'
import score from './Score.vue'
import playerChooser from './PlayerChooser.vue'

class Cell {
    constructor(mark, coord) {
        this.mark = mark;
        this.coord = coord
    }
    disabled() {
        this.mark = ' '
    }
    reset() {
        this.mark = ''
    }
}

const board =
    ref([
        [new Cell('', [1, 4, 7]), new Cell('', [1, 5]), new Cell('', [1, 6, 8]),],
        [new Cell('', [2, 4]), new Cell('', [2, 5, 7, 8]), new Cell('', [2, 6]),],
        [new Cell('', [3, 4, 8]), new Cell('', [3, 5]), new Cell('', [3, 6, 7]),]
    ]);

const turn = ref(0)
const movesOfX = ref([])
const movesOfO = ref([])
const winner = ref(false)
const mark = ref('❌')
const currentScore = ref({
    scoreX: 0,
    scoreO: 0
})

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
const direction = ['left', 'right']
const firstPlayer = ref(direction.random())
function directionRandom() {
    firstPlayer.value = direction.random()
}

watch(turn, (newTurn) => {
    if (newTurn === 9 && !winner.value) {
        winner.value = 'draw'
    }
    if (newTurn % 2 === 0) {
        mark.value = '❌'
    } else {
        mark.value = '🔵'
    }
})

function move(iCell, iRow) {
    let movesOf
    if (mark.value === '❌') {
        movesOf = movesOfX
    } else {
        movesOf = movesOfO
    }
    board.value[iRow][iCell].mark = mark.value
    board.value[iRow][iCell].coord.forEach(el => {
        let itemsFound = movesOf.value.filter((e) => {
            return e == el;
        }).length;
        if (itemsFound >= 2) {

            board.value.forEach(row => {
                row.forEach(cell => {
                    if (!cell.mark) {
                        cell.disabled()
                    }
                })
            })
            winner.value = mark.value;
            (mark.value === '❌') ? currentScore.value.scoreX++ : currentScore.value.scoreO++
        } else {

        }
    })
    turn.value++
    movesOf.value.push(...board.value[iRow][iCell].coord);
}

function retry() {
    board.value.forEach(row => {
        row.forEach(cell => {
            cell.reset();
            movesOfX.value = []
            movesOfO.value = []
            turn.value = 0
            winner.value = false
            directionRandom()
            animation()

        })
    })
}

const animDisabled = ref(false)

function animation() {
    animDisabled.value = true
    setTimeout(() => {
        animDisabled.value = false
    }, 3000);

}

</script>


<template>

    <score v-bind="currentScore" />
    <div class="turn" v-show="!winner">place the {{ mark }} <br> ---
    </div>

    <div class="winner" v-show="winner">
        <span> the winner is... {{ winner }} </span> <br>
        <button @click="retry">RETRY</button>
    </div>
    <div class="board">
        <div class="row" v-for="(row, iRow) of board" :key="iRow">
            <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell"
                :disabled="cell.mark != ''">{{ cell.mark }}
            </button>
        </div>
    </div>
    <playerChooser :first-player="firstPlayer" :animDisabled="animDisabled" />
</template>


<style>


.cell {
    min-width: 150px;
    min-height: 150px;
    width: 150px;
    height: 150px;
    border: 3px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(255,0,0,0.0);
    font-size: 28pt;
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
.row:nth-child(1) > .cell {
    border-top: none
}
.row:nth-child(3) > .cell {
    border-bottom: none
}
</style>