<script setup lang="ts">
import CardAbout from './CardAbout.vue';
import CardInfo from './CardInfo.vue';

</script>

<template>
  <section id="about">
    <CardAbout nombreImagen="image-transform" title="Stand out to the right audience" content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."  :order="true"/>
    <CardAbout nombreImagen="image-stand-out" title="Transform your brand" content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." :order="false" />

    <div class="grid w-full md:grid-cols-2 sm:grid-cols-1" id="services">
      <CardInfo nombreImagen="image-graphic-design" title="Graphic design" content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
      <CardInfo nombreImagen="image-photography" title="Photography" content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
    </div>
  </section>
</template>
