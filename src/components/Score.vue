<script setup>
const props = defineProps(['scoreX', 'scoreO'])

</script>


<template>
    <div class="score">
        <div>❌ {{ scoreX }}</div>
        <div>🔵 {{ scoreO }}</div>
    </div>
</template>


<style>
.score {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 200px;

    height: 50%;
}
.score > div {
    display: block;
    width: 100px;
    text-align: center;
    font-size: 30pt;
}

</style>