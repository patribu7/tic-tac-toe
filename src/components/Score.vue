<script setup>
const props = defineProps(['scoreX', 'scoreO'])

</script>


<template>
    <div class="score">
        <div>❌ {{ scoreX }}</div>
        <div>{{ scoreO }}🔵</div>
    </div>
</template>


<style>
.score {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 70px;
    width: 100%;


}
.score > div {
    display: block;
    text-align: center;
    font-size: 30pt;
}

</style>