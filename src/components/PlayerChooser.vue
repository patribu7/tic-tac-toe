<script setup>
const props = defineProps(['firstPlayer'])



</script>

<template>
    <div class="player-chooser">
        <p>
            X play first. <br>
            The player who has X is on the <br>
            {{ firstPlayer }}
        </p>
        <p>...</p>
        
    </div>
</template>

<style scoped>
.player-chooser {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 50%;
    right: 35%;
    width: 300px;
    height: 200px;
    background-color: #e8e4d6;
    
}




</style>