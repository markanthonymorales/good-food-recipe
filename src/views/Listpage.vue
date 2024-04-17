<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import { ref, type Ref, onMounted, inject } from "vue";
    const database: object | undefined = inject('storadData');
    let top10: any = ref({});
    let limitFrom: number = 0;
    let limitTo: number = 10;
    onMounted(async () => {
        top10.value = Object.values(database)?.filter((data, key, value) => key >= limitFrom && key < (limitFrom > 0 ? limitFrom * limitTo : limitTo));
        console.log(top10.value);
    });
</script>
<template>
 <div id="list-recipes" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">List of All Recipes</header>
        <section class="py-2">
            <div class="w-full px-3">
                <!-- <p for="list-recipes" class="py-2 text-[15px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium">Top 10 Recipes</p> -->
                <ol class="list-decimal list-inside flex flex-wrap text-center item-center justify-evenly">
                    <li v-for="data in top10" class="w-1/2 mb-2">
                        {{ data?.title }}
                    </li>
                </ol>
                <!-- TODO: Pagination -->
            </div>
        </section>
        <FooterNav />
    </article>
 </div>
</template>