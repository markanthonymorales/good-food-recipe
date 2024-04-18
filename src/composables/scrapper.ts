import { ref, type Ref} from "vue";
import { db } from "../composables/db";
import axios from 'axios';

let response: Ref<any> = ref('');
const lists: Ref<Array<T>> = ref([]);

const useScrapper = async() => {
    lists.value = await db.source.toArray();
    lists.value.forEach((list: any) => {
        list.links.forEach(async(link: string) => {
            console.log(link);
            response.value = await axios.get(link) as HTMLElement;
            // TODO: Apply scrapper
            console.log(response.value.data);
            // TODO: Apply scrapper add recipe per loop
            // Alternative: use bulkAdd from Dexie Component
            // await db.recipes.add({
            //     title: '',
            //     instructions: [],
            //     ingredients: [],
            //     nutrients: [],
            //     notes: [],
            //     source: link,
            // });
        });
    });
}

export default useScrapper;