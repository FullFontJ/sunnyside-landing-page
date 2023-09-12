<script lang="ts">
import CardImg from './CardImg.vue';

export default {
    data() {
        return {
            images: [
                { id: 1, image: 'image-gallery-milkbottles' },
                { id: 2, image: 'image-gallery-orange' },
                { id: 3, image: 'image-gallery-cone' },
                { id: 4, image: 'image-gallery-sugarcubes' },
            ],
        };
    },
    components: { CardImg }
};
</script>

<template>
    <section class="grid w-full mt-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 " id="projects">
        <CardImg  v-for="item in images" :key="item.id" :image-name="item.image" />
    </section>
</template>
