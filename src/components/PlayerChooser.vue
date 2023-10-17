<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer', 'animDisabled'])

</script>

<template>
    <div id="player-chooser" :class="{ slip: animDisabled }">
        <img :src="`/src/assets/images/${firstPlayer}.gif`" /><br>
        <p>
            X play first. <br>
            The player who <br>
            play X is<br>
            on the {{ firstPlayer }} <br>
           
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
    margin-left: -90px;
    background-color: transparent;

}

.slip {
    animation: slip 3s;


}

@keyframes slip {
    from {
        opacity: 100%;
        top:0
        
    }

    to {  
        opacity: 100%;  
        top: calc(50% - 150px);
    }
}




</style>