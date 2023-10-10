<script setup>
import { ref } from 'vue'

const board = ref([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const turn = ref(1)

function move(iCell, iRow) {
  let mark = (turn.value % 2 === 0) ? '🔵' : '❌'

  board.value[iRow][iCell] = mark
  turn.value++
}

</script>


<template>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell">{{ cell }}</button>
    </div>
</template>


<style>
.cell {
    width: 200px;
    height: 200px;
}
</style>