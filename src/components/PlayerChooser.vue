<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer', 'animDisabled'])

</script>

<template>
    <div id="player-chooser" :class="{ slip: animDisabled }">
        <p>
            X play first. <br>
            The player who has X is on the <br>
            {{ firstPlayer }}
            <img :src="`/src/assets/images/${firstPlayer}.gif`" />
           
        </p>
        <p>...</p>

    </div>
</template>

<style scoped>
#player-chooser {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 0px;
    right: calc(50% - 150px);
    width: 300px;
    height: 200px;
    background-color: #e8e4d6;

}

.slip {
    animation: slip 3s;


}

@keyframes slip {
    from {
        bottom: 100%;
        
    }

    to {
        bottom: 0;
    }
}




</style>