<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer'])



</script>

<template>
<div>X play first. The player who has X is on the {{ firstPlayer }}</div>
</template>

<style scoped>

</style>