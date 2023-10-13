<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer'])



</script>

<template>
<div class="player-chooser">X play first. The player who has X is on the {{ firstPlayer }}</div>
</template>

<style scoped>

</style>