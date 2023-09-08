<script setup lang="ts">
defineProps<{
    avatarImagen: string,
    comment: string,
    name: string,
    rol: string,
}>();
</script>

<template>
    <div class="flex flex-col items-center text-center gap-8">
        <img class="w-16 h-16 rounded-full" :src="'/images/' + avatarImagen + '.jpg'" :alt="name">
        <p class="font-barlow text-sm font-semibold text-dark-moderate-cyan m-2">{{ comment }}</p>
        <div>
            <h4 class="font-fraunces text-lg font-black capitalize">{{ name }}</h4>
            <p class="text-sm text-dark-moderate-cyan font-barlow font-light">{{ rol }}</p>
        </div>
    </div>
</template>