<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
</script>
<template>
 <div id="loginpage" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">Administrator access only.</header>
        <section class="py-2">
            <form method="get" action="#">
                <div>
                    <label for="hs-trailing-button-add-on-with-icon-and-button" class="sr-only">Search</label>
                    <div class="relative flex rounded-lg shadow-sm">
                        <input type="password" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" class="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                            <div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Login</button>
                    </div>
                </div>
            </form>
        </section>
        <FooterNav />
    </article>
 </div>
</template>