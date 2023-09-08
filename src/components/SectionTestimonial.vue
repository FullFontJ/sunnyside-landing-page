<script lang="ts">
import CardTestimonial from './CardTestimonial.vue';


export default {
    data() {
        return {
            testimonial: [
                { id: 1, avatar: 'image-emily', comment: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.', name: 'Emily R.', rol: 'Marketing Director' },
                { id: 2, avatar: 'image-jennie', comment: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.', name: 'Thomas S.', rol: 'Chief Operating Officer' },
                { id: 3, avatar: 'image-thomas', comment: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!', name: 'Jennie F.', rol: 'Business Owner' },
            ],
        };
    },
    components: { CardTestimonial }
};

</script>


<template>
    <section class="md:my-28 sm:my-12">
        <h3 class="text-center m-12 text-2xl font-fraunces font-black text-dark-moderate-cyan">Client testimonials</h3>
        <div class="grid md:grid-cols-3 sm:grid-cols-1 md:mx-32 sm:mx-0" >
            <CardTestimonial v-for="item in testimonial" :key="item.id" :avatarImagen="item.avatar" :comment="item.comment" :name="item.name" :rol="item.rol"/>
        </div>
    </section>
</template>