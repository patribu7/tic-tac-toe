<script setup>
import { ref } from 'vue'
const props = defineProps(['firstPlayer', 'animDisabled'])

</script>

<template>
    <div id="player-chooser" :class="{ slip: animDisabled }">
        <img :src="`/src/assets/images/${firstPlayer}.gif`" /><br>
        <p>
            X play first. <br>
            The player who play X is on the <br>
            {{ firstPlayer }} <br>
           
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
    bottom: 10px;
    right: calc(50% - 150px);
    width: 300px;
    height: 200px;
    background-color: #e8e4d6;

}

/* @media screen and (max-height: 770px) {
    #player-chooser {
        display: none;
    }

} */

.slip {
    animation: slip 3s;


}

@keyframes slip {
    from {
        bottom: 100%;
        
    }

    to {
        bottom: 10px;
    }
}




</style>