<script setup lang="ts">
defineProps<{
    imageName: string,
}>();
</script>

<template>
        <picture class="w-full">
            <source :srcset="'/images/desktop/' + imageName + '.jpg'" media="(min-width: 769px)" />
            <img :src="'/images/mobile/' + imageName + '.jpg'" />
        </picture>
</template>