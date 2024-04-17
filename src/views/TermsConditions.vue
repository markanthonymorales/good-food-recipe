<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    const yearToday: number = new Date().getFullYear();
</script>
<template>
 <div id="terms-conditions" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">Terms and Conditions</header>
        <section class="py-2">
            <p class="pb-2">Last updated: {{ yearToday }}</p>
            <p class="pb-2">Please read these terms and conditions ("Terms", "Terms and Conditions") carefully before using the Good Food Recipe Chrome extension (the "Extension") operated by Good Food Recipe ("us", "we", or "our").</p>
            <p class="pb-2">Your access to and use of the Extension is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Extension.</p>
            <p class="pb-2">By accessing or using the Extension you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Extension.</p>
            <label class="font-black">Content</label>
            <p class="pb-2">Our Extension allows users to access recipes and related content ("Content"). While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Content.</p>
            <label class="font-black">Intellectual Property</label>
            <p class="pb-2">The Extension and its original content, features, and functionality are owned by Good Food Recipe and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            <label class="font-black">Links to Other Websites</label>
            <p class="pb-2">Our Extension may contain links to third-party websites or services that are not owned or controlled by Good Food Recipe. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Good Food Recipe shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
            <label class="font-black">Changes</label>
            <p class="pb-2">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <label class="font-black">Contact Us</label>
            <p class="pb-2">If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>
        </section>
        <FooterNav />
    </article>
 </div>
</template>
