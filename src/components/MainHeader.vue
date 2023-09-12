<script lang="ts">
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<template>
  <header class="relative">
    <div class="absolute top-0 left-0 w-full mt-7">
        <nav class="flex flex-row justify-between mx-10">
            <img class="w-36 h-8" src="/images/logo.svg" />
            <div class="sm:hidden">
                <button @click="toggleMenu" class="text-white">
                    <img src="/images/icon-hamburger.svg" />
                </button>
            </div>
            <div v-if="isMobileMenuOpen" >
                <ul :class="isMobileMenuOpen ? 'absolute' : 'hidden'" class="flex z-10 flex-col absolute w-full top-0 left-0 py-4 bg-dark-desaturated-cyan gap-10 items-center">
                    <li @click="toggleMenu" class="text-white w-8 h-8 self-end mr-5 sm:hidden"><img src="/images/icon-close.svg" /></li>
                    <li class="font-barlow text-base font-bold text-white"><a href="#about">About</a></li>
                    <li class="font-barlow text-base font-bold text-white"><a href="#services">Services</a></li>
                    <li class="font-barlow text-base font-bold text-white"><a href="#projects">Projects</a></li>
                    <li class="font-fraunces text-base font-bold text-dark-blue border p-2 bg-white rounded-full"><a href="#">CONTACT</a></li>
                </ul>
            </div>
            
            <ul class="hidden sm:flex sm:relative sm:bg-transparent sm:py-0 sm:left-auto sm:right-auto  md:flex-row gap-10 items-center sm:justify-end">
                    <li class="font-barlow text-base font-bold text-white"><a href="#about">About</a></li>
                    <li class="font-barlow text-base font-bold text-white"><a href="#services">Services</a></li>
                    <li class="font-barlow text-base font-bold text-white"><a href="#projects">Projects</a></li>
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

