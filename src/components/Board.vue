<script setup>
const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
</script>


<template>
    <div v-for="(row, iRow) of board" :key="iRow">
        <button class="cell" v-for="(cell, iCell) of row" :key="iCell">{{ cell }}</button>
    </div>
</template>


<style>
.cell {
    width: 200px;
    height: 200px;
}
</style>