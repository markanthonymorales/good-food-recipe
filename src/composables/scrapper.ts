import { db } from "../composables/db";
import useInsertRecipe from "../composables/insert-new-recipe";
import useAlert from "../composables/alert";

const renderLinks = async (lists: any, limit: number) => {
    lists.forEach(async(list: any) => {
        let newLinks = list.links.splice(0, limit);
        newLinks.forEach(async(link: string) => {
            await useInsertRecipe(link);
        });
    });
};

const useScrapper = async(limit: number = 0) => {
    await useAlert("Generate data...");
    let lists: Array<object> = await db.source.toArray();
    await renderLinks(lists, limit);
    await useAlert("Successfully generate new data...");
}

export default useScrapper;
