<script setup lang="ts">

</script>

<template>
  <header class="relative">
    <div class="absolute top-0 left-0 w-full mt-7">
        <nav class="flex flex-row justify-between mx-10">
            <img class="w-36 h-8" src="/images/logo.svg" />
            <ul class="flex flex-row gap-10 items-center">
                <li class="font-barlow text-base font-bold text-white"><a href="#">About</a></li>
                <li class="font-barlow text-base font-bold text-white"><a href="#">Services</a></li>
                <li class="font-barlow text-base font-bold text-white"><a href="#">Projects</a></li>
                <li class="font-fraunces text-base font-bold text-dark-blue border p-2 bg-white rounded-full"><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    </div>
    <div>
        <div class="absolute top-1/3 inset-x-0 flex items-center justify-center">
            <p class="text-center text-7xl font-fraunces font-black text-white">We are creatives</p>
        </div>
        <picture class="w-full">
            <source srcset="/images/desktop/image-header.jpg" media="(min-width: 769px)" />
            <img src="/images/mobile/image-header.jpg" />
        </picture>
    </div>
  </header>
</template>

