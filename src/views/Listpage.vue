<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
</script>
<template>
 <div id="listpage" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">List of All Recipes</header>
        <section class="mx-2">
        </section>
        <FooterNav />
    </article>
 </div>
</template>