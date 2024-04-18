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
            response.value = await axios.get(link);
            console.log(response.value.data);
        });
    });
}

export default useScrapper;