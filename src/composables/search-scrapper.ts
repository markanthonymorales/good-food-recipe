import { nextTick } from "vue";
import { db } from "../composables/db";
import useInsertRecipe from "../composables/insert-new-recipe";
import useAlert from "../composables/alert";

const renderLinks = async (getLinks: any) => {
    getLinks.forEach(async(links: Array<string>) => {
        links.forEach(async(link: string) => {
            await useInsertRecipe(link);
        });
    });
};

const useSearchScrapper = async(param: string = '') => {
    if(param === '') return;

    await useAlert("Searching...");

    const regex: RegExp = new RegExp(param, "i");
    const collection = db.source
    .orderBy('title')
    .filter((source) => typeof source.links !== "undefined" && source.links.length > 0 && !!source.links.filter((link: string) => link !== '' && regex.test(link)) );
    let response: Array<any> = await collection.toArray();
    let getLinks: Array<any> = response.map((source) => source.links.filter((link: string) => link !== '' && regex.test(link)));
    await renderLinks(getLinks);
    await useAlert(getLinks.length > 0 ? "Done..." : "Not found...");
}

export default useSearchScrapper;
