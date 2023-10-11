<script setup>
import { ref, computed } from 'vue'
class Cell {
    constructor(mark, n) {
        this.mark = mark;
        this.n = n
    }
}

const board = ref([[new Cell('', [1, 4, 7]), new Cell('', [1, 5]), new Cell('', [1, 6, 8]),], [new Cell('', [2, 4]), new Cell('', [2, 5, 7, 8]), new Cell('', [2, 6]),], [new Cell('', [3, 4, 8]), new Cell('', [3, 5]), new Cell('', [3, 6, 7]),]])

const turn = ref(0)
const moveOfX = ref([])
const moveOfO = ref([])
const winner = ref(false)
const placeHolderDisabled = ' '



function move(iCell, iRow) {
    if (turn.value % 2 === 0) {
        let mark = '❌';
        board.value[iRow][iCell].mark = mark
        moveOfX.value.push(...board.value[iRow][iCell].n);
        moveOfX.value.forEach(el => {
            var itemsFound = moveOfX.value.filter(function (e) {
                return e == el;
            }).length;
            if (itemsFound == 3) {
                winner.value = 'X';
                board.value.forEach(row => {
                    row.forEach(cell => {
                        if (!cell.mark){
                            cell.mark = placeHolderDisabled

                        }
                        
                    })
                })
                    
            }
        });
    } else {
        let mark = '🔵';
        board.value[iRow][iCell].mark = mark;
        moveOfO.value.push(...board.value[iRow][iCell].n);
        moveOfO.value.forEach(el => {
            var itemsFound = moveOfO.value.filter(function (e) {
                return e == el;
            }).length;
            if (itemsFound == 3) {
                winner.value = 'O'
                                board.value.forEach(row => {
                    row.forEach(cell => {
                        if (!cell.mark){
                            cell.mark = placeHolderDisabled

                        }
                        
                    })
                })
              
            }
        });
    }
    turn.value++
}

</script>


<template>
    <div v-if="winner">the winner is {{ winner }}</div>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell"
            :disabled="cell.mark != ''">{{
                cell.mark }}</button>
    </div>
    <div>move of X{{ moveOfX }} / move of O{{ moveOfO }}</div>
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