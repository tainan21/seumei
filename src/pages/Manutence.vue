<template>
    <body class="bg-gradient">
        <div class="container mx-auto">
            <section class="flex flex-wrap lg:flex-nowrap justify-center h-screen relative">
                <div class="my-auto font-poppins text-gray-200 text-center lg:text-left">
                    <h1 class="font-medium text-5xl py-3">Esse site está<br>   em manutenção </h1>
                    <p class="lg:w-5/6">site em manutenção</p>
                    <div class="bg-gray-50 p-3 px-5 sm:w-96 rounded-md my-8 mx-auto lg:mx-0 flex">
                        <input type="text" class="border-0 flex-grow" placeholder="Deixe seu email">
                        <button class="text-gray-500 hover:text-red-400">Notifique me</button>
                    </div>
                </div>
                <div class="my-auto text-center w-3/4 lg:w-2/5">
                    <img class="rounded-full image1 animate-moveY" src="./assets/img1.jpg" alt="image1">
                    <img class="image2 animate-rotateZ" src="./assets/img2.png" alt="image2">
                    <img class="image3  animate-rotateZ" src="./assets/img3.png" alt="image3">
                </div>
            </section>
        </div>
    </body>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-gradient{
    background: #8E2DE2;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* .image1{
    animation: moveY 2s infinite;
} */
.image2{
    position: absolute;
    top: -110px;
    left: -400px;
    width: 20%;
    opacity: 0.50;
}

.image3{
    position: absolute;
    top: 0px;
    right: 200px;
    width: 50%;
    opacity: 0.30;
    z-index: -99;
}

/* 
@keyframes moveY {
    0% { transform: translateY(0px)}
    50% { transform: translateY(25px)}
    100% { transform: translateY(0px)}
} */

</style>