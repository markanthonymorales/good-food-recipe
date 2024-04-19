<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import useSitemapScrapper from "../composables/site-map-scrapper";
    import { ref, type Ref, onMounted } from "vue";
    
    const title: Ref<string> = ref('');
    const url: Ref<string> = ref('');
    const indicators: Ref<Array<string>> = ref([]);
    const isSubmit: Ref<boolean> = ref(false);

    interface Info {
        status: boolean,
        message: string | null,
    }
    const info: Ref<Info> = ref({
        status: false,
        message: ''
    });
    const submit = async () => {
        // console.log(title.value, url.value, indicators.value, );
        isSubmit.value = true;
        if(title.value.length === 0) {
            info.value = {
                status: false,
                message: "Please add name"
            };
            return false;
        }

        if(url.value.length === 0) {
            info.value = {
                status: false,
                message: "Please add url"
            };
            return false;
        }

        // if(Object.values(indicators.value).length === 0) {
        //     info.value = {
        //         status: false,
        //         message: "Please add at least one indicator"
        //     };
        //     return false;
        // }

        await useSitemapScrapper(title.value, url.value);
        
        info.value = {
            status: true,
            message: "Successfully add new source..."
        };
    };

    const addLink = async () => {
        indicators.value?.push('');
    };

    const deleteLink = async (index: number) => {
        indicators.value?.splice(index, 1);
    };

    onMounted(async () => {
        isSubmit.value = false;
    });
</script>
<template>
    <div id="admin" class="h-full w-full container mx-auto font-inter p-2">
        <Navigation />
        <article class="w-full ">
            <section class="w-full">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="#" @submit.prevent="submit">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name: </label>
                        <input type="text" v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">URL: </label>
                        <input type="url" v-model="url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <!-- <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="indicators">Elements Indicator: </label>
                        <div class="mb-2 flex rounded-lg shadow-sm" v-for="(indicator, index) in indicators">
                            <input type="text" v-model="indicator[index]" class="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <button type="button" @click="deleteLink(index)" class="w-[2.875rem] h-[2.4rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">X</button>
                        </div>
                        <button type="button" @click="addLink" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 shadow appearance-none border rounded-full">+</button>
                    </div> -->
                    <div class="mb-6" v-if="isSubmit">
                        <p :class="info.status ? 'text-success' : 'text-danger'" class="font-extrabold text-[12px]">{{ info.message }}</p>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run Scapper</button>
                    </div>
                </form>
            </section>
        </article>
        <FooterNav />
    </div>
</template>