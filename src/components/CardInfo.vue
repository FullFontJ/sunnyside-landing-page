<script setup lang="ts">
defineProps<{
    nombreImagen: string,
    title: string,
    content: string,
}>();
</script>

<template>
  <div class=" relative">
    <picture class="w-full">
        <source :srcset="'/images/desktop/' + nombreImagen + '.jpg'" media="(min-width: 769px)" />
        <img :src="'/images/mobile/' + nombreImagen + '.jpg'" />
    </picture>
    
    <div class=" absolute flex flex-col items-center bottom-10 text-center inset-x-0 gap-4 text-dark-desaturated-cyan">
        <h2 class="font-fraunces font-black text-4xl">{{ title }}</h2>
        <p class="font-barlow text-sm font-semibold w-3/4">{{ content }}</p>
    </div>
  </div>
</template>
