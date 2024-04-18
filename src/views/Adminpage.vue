<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import { db } from "../composables/db";
    import { ref, type Ref, onMounted, watch } from "vue";
    import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

    interface Data {
        title: string,
        links: Array<string>,
    }
    
    const title: Ref<string> = ref('');
    const links: Ref<Array<string>> = ref([]);
    const dataList: Ref<Array<Data>> = ref([]);
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
        isSubmit.value = true;
        if(title.value.length === 0) {
            info.value = {
                status: false,
                message: "Please add name of source"
            };
            return false;
        }

        if(Object.values(links.value).length === 0) {
            info.value = {
                status: false,
                message: "Please add at least one source link"
            };
            return false;
        }
        await db.source.add({
            title: title.value,
            links: Object.values(links.value)
        });
        info.value = {
            status: true,
            message: "Successfully add new source..."
        };
    };

    const generateNewFile = async () => {
        const dataURI = "data:text/plain;base64," + encodeBase64(JSON.stringify({ datas: await db.source.toArray() }));
        saveAs(dataURI, "source-data.json");
    };

    const addLink = async () => {
        links.value?.push('');
    };

    const deleteLink = async (index: number) => {
        links.value?.splice(index, 1);
    };

    onMounted(async () => {
        isSubmit.value = false;
        dataList.value = await db.source.toArray();
    });
</script>
<template>
    <div id="admin" class="h-full w-full container mx-auto font-inter p-2">
        <Navigation />
        <article class="w-full ">
            <section class="w-full">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="#" @submit.prevent="submit">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Source Name: </label>
                        <input type="text" v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="link">Links: </label>
                        <div class="mb-2 flex rounded-lg shadow-sm" v-for="(link, index) in links">
                            <input type="url" class="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" v-model="links[index]">
                            <button class="w-[2.875rem] h-[2.4rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" type="button" @click="deleteLink(index)">X</button>
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 shadow appearance-none border rounded-full" type="button" @click="addLink">+</button>
                    </div>
                    <div class="mb-6" v-if="isSubmit">
                        <p :class="info.status ? 'text-success' : 'text-danger'" class="font-extrabold text-[12px]">{{ info.message }}</p>
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </section>

            <section class="w-full my-3">
                <div class="mb-6">
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="generateNewFile">Generate</button>
                </div>
                <table class="w-full border table-auto">
                    <thead>
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Links</th>
                    </thead>
                    <tbody>
                        <tr v-for="detail in dataList">
                            <td class="border px-4 py-2">{{ detail.id }}</td>
                            <td class="border px-4 py-2">{{ detail.title }}</td>
                            <td class="border px-4 py-2">
                                <ul class="w-full">
                                    <li v-for="link in detail.links" class="border-b-2 border-gray-600">{{ link }}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
        <FooterNav />
    </div>
</template>