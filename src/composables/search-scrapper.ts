import { db } from "../composables/db";
import useInsertRecipe from "../composables/insert-new-recipe";

const useSearchScrapper = async(param: string = '') => {
    if(param === '') return;

    // @ts-ignore
    document.querySelector('#alert').textContent = "Run Scrapper...";

    const regex: RegExp = new RegExp(param, "i");
    const collection = db.source
    .orderBy('title')
    .filter((source) => typeof source.links !== "undefined" && source.links.length > 0 && !!source.links.filter((link: string) => link !== '' && regex.test(link)) );
    
    let response: Array<any> = await collection.toArray();
    let getLinks: Array<any> = response.map((source) => source.links.filter((link: string) => link !== '' && regex.test(link)));

    await getLinks.forEach(async(links: Array<string>) => {
        await links.forEach(async(link: string) => {
            await useInsertRecipe(link);
        });
    });

    // @ts-ignore
    document.querySelector('#alert').textContent = "Done...";
}

export default useSearchScrapper;
