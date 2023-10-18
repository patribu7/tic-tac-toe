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
    text-align: left;
    opacity: 0;
    top: calc(50% - 150px);
    left: 0;
    width: 300px;
    height: 200px;
    margin-left: -50px;
    background-color: transparent;

}

.slip {
    animation: slip 5s;


}

@keyframes slip {
    0% {
        opacity: 100%;
        top:0
        
    }

    20% {  
        opacity: 100%;  
        top: calc(50% - 150px);
    }
    100% {
        opacity: 100%;
        top: calc(50% - 150px);
    }
}

@media screen and (max-width: 640px) {
    #player-chooser {
        display: none
    }

}


</style>