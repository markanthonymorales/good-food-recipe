import { db } from "../composables/db";
import useInsertRecipe from "../composables/insert-new-recipe";

const useScrapper = async(limit: number = 0) => {
    // @ts-ignore
    document.querySelector('#alert').textContent = "Run Scrapper...";

    let lists: Array<object> = await db.source.toArray();
    
    await lists.forEach(async(list: any) => {
        let newLinks = list.links.splice(0, limit);
        await newLinks.forEach(async(link: string) => {
            await useInsertRecipe(link);
        });
    });

    // @ts-ignore
    document.querySelector('#alert').textContent = "Done...";
}

export default useScrapper;
