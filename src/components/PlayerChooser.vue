<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer', 'animDisabled'])

</script>

<template>
    <div id="player-chooser" :class="{ slip: animDisabled }">
        <img :src="`/src/assets/images/${firstPlayer}.gif`" /><br>
        <p>
            ❌ play first. <br>
            --- <br>
            The player who <br>
            play ❌ is<br>
            on the <strong>{{ firstPlayer }} </strong> <br>
           
        </p>
        <p>...</p>

    </div>
</template>

<style scoped>


img, p {
    margin: 0;
}
#player-chooser {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0%;
    top: calc(50% - 100px);
    left: calc(50% - 200px);
    width: 300px;
    height: 200px;
    background-color: #e8e4d6;
    border: solid 1px gray;
    border-radius: 200px;
    padding: 40px;
    z-index: -100;


}

.slip {
    animation: slip 5s;


}

@keyframes slip {
    0% {
        z-index: 100;
        opacity: 100%;
        top:0
        
    }

    20% {
        z-index: 100;
        opacity: 100%;  
        top: calc(50% - 100px);
    }
    100% {
        z-index: 100;
        opacity: 100%;
        top: calc(50% - 100px);
    }
}


</style>