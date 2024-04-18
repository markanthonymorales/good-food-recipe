import { ref, type Ref} from "vue";
import { db } from "../composables/db";
import axios from 'axios';

let response: Ref<any> = ref('');
const lists: Ref<Array<T>> = ref([]);

const useScrapper = async() => {
    lists.value = await db.source.toArray();
    lists.value.forEach((list: any) => {
        list.links.forEach(async(link: string) => {
            if (response.value.data != '') {
                response.value = await axios.get(link) as HTMLElement;
                // TODO: Apply scrapper
                const parser = new DOMParser();

                // convert html string into DOM
                const documents = parser.parseFromString(response.value.data, "text/html");
                let title: string = documents.querySelector('.wprm-recipe-name')?.textContent ?? '';
                let ingredients: Array<string> = [];
                documents.querySelector('.wprm-recipe-ingredients')?.childNodes.forEach((node: any) => {
                    ingredients.push(node.textContent);
                });

                let instructions: Array<string> = [];
                documents.querySelector('.wprm-recipe-instructions')?.childNodes.forEach((node: any) => {
                    instructions.push(node.textContent);
                });

                let nutrients: Array<string> = [];
                documents.querySelector('.wprm-nutrition-label-container')?.childNodes.forEach((node: any) => {
                    nutrients.push(node.textContent);
                });

                // console.log(title, ingredients, instructions, nutrients);
                // TODO: Apply scrapper add recipe per loop
                // Alternative: use bulkAdd from Dexie Component
                await db.recipes.add({
                    title: title,
                    instructions: instructions,
                    ingredients: ingredients,
                    nutrients: nutrients,
                    notes: [],
                    source: link
                });
                console.log('Successfully add new ['+title+'] recipe...');
            }
        });
    });
}

export default useScrapper;