<script setup lang="ts">
defineProps<{
    nombreImagen: string,
    title: string,
    content: string,
    order: boolean,
}>();
</script>

<template>
  <div class="grid md:grid-cols-2 sm:grid-cols-1">
    <picture class="w-full" :class="order ? 'md:order-2' : ''">
        <source :srcset="'/images/desktop/' + nombreImagen + '.jpg'" media="(min-width: 769px)" />
        <img :src="'/images/mobile/' + nombreImagen + '.jpg'" />
    </picture>
    
    <div class="flex flex-col justify-center p-12 pl-16 gap-4">
        <h2 class="font-fraunces font-black text-4xl">{{ title }}</h2>
        <p class="font-barlow text-base font-semibold text-dark-moderate-cyan">{{ content }}</p>
        <p class="font-fraunces font-black uppercase text-base">learn more</p>
    </div>
  </div>
</template>
