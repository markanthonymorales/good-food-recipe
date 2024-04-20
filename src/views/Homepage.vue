<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import { db } from "../composables/db";
    import { ref, type Ref, onMounted, watch } from "vue";
    import useScrapper from "../composables/scrapper";
    import useSearchScrapper from "../composables/search-scrapper";

    let top10: any = ref([]);
    let filter: Ref<string> = ref('');

    watch(
        () => filter.value,
        async (value) => {
            top10.value = await getCollection(value.toLowerCase());
            if(top10.value.length === 0) {
                await useSearchScrapper(value.toLowerCase());
            }
        }
    )

    const checkingData = async() => {
        if (top10.value.length !== 0) {
            return;
        }

        return await useScrapper(10);
    };

    const getCollection = async(search: string = '') => {
        let query: RegExp = new RegExp(search, "i");
        const collection = db.recipes
        .orderBy('title')
        .filter((recipes) => typeof recipes.title !== "undefined" && recipes.title !== "" && query.test(recipes.title.toLowerCase()));

        return await collection.limit(10).toArray();
    }

    onMounted(async () => {
        top10.value = await getCollection();

        await checkingData();

        top10.value = await getCollection();
    });
</script>
<template>
 <div id="homepage" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">
            Welcome to Good Food Recipe...
        </header>
        <section class="my-2">
            <div>
                <label for="hs-trailing-button-add-on-with-icon-and-button" class="sr-only">Search</label>
                <div class="relative flex rounded-lg shadow-sm">
                    <input type="text" v-model="filter" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" class="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-2">
            <div class="w-full px-3">
                <p for="list-recipes" class="py-2 text-[15px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium">Top 10 Recipes</p>
                <ol class="list-decimal list-inside flex flex-wrap item-center justify-evenly">
                    <li v-for="data in top10" class="w-1/2 mb-2 truncate">
                        <router-link :to="{ path: '/recipe/' + data?.id.toString() }" :alt="data?.title" class="hover:bg-gray-600 hover:text-white cursor-pointer">
                            <span>
                                {{ data?.title }}
                            </span>
                        </router-link>
                    </li>
                </ol>
            </div>
        </section>
        <FooterNav />
    </article>
 </div>
</template>