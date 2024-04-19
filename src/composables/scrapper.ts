import axios from 'axios';
import { db } from "../composables/db";
import { Source } from "../types/source-type";
import useInsertRecipe from "../composables/insert-new-recipe";

const useScrapper = async() => {
    let lists: Source = await db.source.toArray();
    lists.forEach((list: any) => {
        list.links.forEach(async(link: string) => {
            await useInsertRecipe(link);
        });
    });
}

export default useScrapper;
