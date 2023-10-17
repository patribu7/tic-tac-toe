
<template>
    <footer>
    <div class="footer-elem" >
        <img src="" alt="vue">

    </div>
    <div class="footer-elem">
        <p><a href="#">contact me</a></p>
        <p><a href="#">about me</a></p>
        <p><a href="#">repo Github</a></p>
    </div>
    <div class="footer-elem">
        <p>Copyright © 2023 Patrizia Busatto</p>
    </div>
    
    </footer>
</template>

<script setup>
</script>

<style>
footer {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.footer-elem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
}

</style>