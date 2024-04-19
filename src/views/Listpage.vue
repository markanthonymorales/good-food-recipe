<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import { ref, type Ref, onMounted } from "vue";
    import { db } from "../composables/db";

    let top10: any = ref({});
    let counter: number = 0;
    let limitPerPage: number = 10;
    let totalPage: number = 0;
    let pagination: number = 0;

    const prev = async() => {
        if(counter === 0){
            return;
        }
        counter--;
        pagination -= limitPerPage;
        const collection: any = db.recipes
        .orderBy('title')
        .filter((recipes) => typeof recipes.title !== "undefined" && recipes.title !== "");
        top10.value = await collection.offset(pagination).limit(limitPerPage).toArray();
    };

    const next = async() => {
        if(pagination === totalPage){
            return;
        }
        counter++;
        pagination += limitPerPage;
        const collection: any = db.recipes
        .orderBy('title')
        .filter((recipes) => typeof recipes.title !== "undefined" && recipes.title !== "");
        top10.value = await collection.offset(pagination).limit(limitPerPage).toArray();
    };

    onMounted(async () => {
        const collection: any = db.recipes
        .orderBy('title')
        .filter((recipes) => typeof recipes.title !== "undefined" && recipes.title !== "");
        let total: number = await collection.count();
        totalPage = total / limitPerPage;
        top10.value = await collection.offset(pagination).limit(limitPerPage).toArray();
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
                <ol class="list-decimal list-inside flex flex-wrap item-center justify-evenly">
                    <li v-for="data in top10" class="w-1/2 mb-2 truncate">
                        {{ data?.title }}
                    </li>
                </ol>
                <div class="my-2">
                    
                    <nav class="flex item-center justify-center" aria-label="Page navigation example">
                        <ul class="inline-flex -space-x-px text-sm">
                            <li>
                                <a href="#" @click="prev" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <span class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ counter }} / {{ parseInt(totalPage.toString()) }}</span>
                            </li>
                            <li>
                                <a href="#" @click="next" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </section>
        <FooterNav />
    </article>
 </div>
</template>