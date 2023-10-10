<script setup>
import { ref, computed } from 'vue'

const board = ref([['', '', ''], ['', '', ''], ['', '', '']])
const turn = ref(1)


function move(iCell, iRow) {
  let mark = (turn.value % 2 === 0) ? '🔵' : '❌'

  board.value[iRow][iCell] = mark
  turn.value++

}

</script>


<template>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" @click="move(iCell, iRow)" v-for="(cell, iCell) of row" :key="iCell" :disabled="cell != ''" >{{ cell }}</button>
    </div>
</template>


<style>
.cell {
    width: 200px;
    height: 200px;
}
</style>