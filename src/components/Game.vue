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
const currentScore = ref({
    scoreX: 0,
    scoreO: 0
})
const mark = ref('❌')

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
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

function reset() {
    board.value.forEach(row => {
        row.forEach(cell => {
            cell.reset();
            movesOfX.value = []
            movesOfO.value = []
            turn.value = 0
            winner.value = false
            directionRandom()
        })
    })
}



</script>


<template>
    
    <playerChooser :first-player="firstPlayer"/>
    <score v-bind="currentScore" />
    <div>this is turn of {{ mark }}</div>
    <div v-show="winner">the winner is {{ winner }} <button @click="reset">reset</button></div>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell"
            :disabled="cell.mark != ''">{{ cell.mark }}</button>
    </div>
    <div>move of X{{ movesOfX }} / move of O{{ movesOfO }}</div>
    <div>{{ turn }}</div>
</template>


<style>
.cell {
    min-width: 200px;
    min-height: 200px;
    width: 200px;
    height: 200px;
}
</style>