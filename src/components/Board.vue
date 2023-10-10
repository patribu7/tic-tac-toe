<script setup>
import { ref, computed } from 'vue'

const board = ref([['', '', ''], ['', '', ''], ['', '', '']])
const turn = ref(0)
const moveOfX = ref([])
const moveOfO = ref([])

function move(iCell, iRow) {
    if (turn.value % 2 === 0) {
        let mark = '❌';
        board.value[iRow][iCell] = mark
        moveOfX.value.push([iRow, iCell]);

    } else {
        let mark = '🔵';
        board.value[iRow][iCell] = mark;
        moveOfO.value.push([iRow, iCell]);
    }
    turn.value++
}

</script>


<template>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell" :disabled="cell != ''">{{
            cell }}</button>
    </div>
    <div>move of X{{ moveOfX }} / move of O{{ moveOfO }}</div>
</template>


<style>
.cell {
    width: 200px;
    height: 200px;
}
</style>