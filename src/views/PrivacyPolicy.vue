<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    const yearToday: number = new Date().getFullYear();
</script>
<template>
 <div id="privacy-policy" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">Privacy Policy</header>
        <section class="py-2">
            <p class="pb-2">Last updated: {{ yearToday }}</p>
            <p class="pb-2">Good Food Recipe ("us", "we", or "our") operates the Good Food Recipe Chrome extension (the "Extension").</p>
            <label class="font-black">Information Collection and Use</label>
            <p class="pb-2">We do not collect any personally identifiable information from users of our Extension.</p>
            <label class="font-black">Data Usage</label>
            <p class="pb-2">Our Extension does not utilize cookies or sessions for data collection.</p>
            <label class="font-black">Contact Us</label>
            <p class="pb-2">If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>
        </section>
        <FooterNav />
    </article>
 </div>
</template>