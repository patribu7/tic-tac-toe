<script setup>
import { ref, computed } from 'vue'

class Cell {
    constructor(mark, coord) {
        this.mark = mark;
        this.coord = coord
    }
    disabled(){
        this.mark = ' '
    }
    reset() {
        this.mark = ''
    }
}

const board =
    ref(
        [[new Cell('', [1, 4, 7]), new Cell('', [1, 5]), new Cell('', [1, 6, 8]),],
        [new Cell('', [2, 4]), new Cell('', [2, 5, 7, 8]), new Cell('', [2, 6]),],
        [new Cell('', [3, 4, 8]), new Cell('', [3, 5]), new Cell('', [3, 6, 7]),]]
    );

const turn = ref(0)
const movesOfX = ref([])
const movesOfO = ref([])
const winner = ref(false)

function foo(marked, movesOf, iCell, iRow) {
    board.value[iRow][iCell].mark = marked
    movesOf.value.push(...board.value[iRow][iCell].coord);
    movesOf.value.forEach(el => {
        var itemsFound = movesOf.value.filter(function (e) {
            return e == el;
        }).length;
        if (itemsFound == 3) {
            winner.value = marked;
            board.value.forEach(row => {
                row.forEach(cell => {
                    if (!cell.mark) {
                        cell.disabled()
                    }
                })
            })
        }
    });
}

function move(iCell, iRow) {
    if (turn.value % 2 === 0) {
        foo('❌', movesOfX, iCell, iRow)
    } else {
        foo('🔵', movesOfO, iCell, iRow)
    }
    turn.value++
}

function reset() {
    board.value.forEach(row => {
        row.forEach(cell => {
            cell.reset();
            movesOfX.value = []
            movesOfO.value = []
            turn.value = 0
            winner.value = false
        })
    })
}

</script>


<template>
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