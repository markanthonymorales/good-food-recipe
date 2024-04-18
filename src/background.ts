import { db } from "./composables/db";
import { useStoradData } from "./composables/data-compiler";
import useScrapper from "./composables/scrapper";

const checkSourceData = async (): Promise<boolean> => {
    const data: any = await db.source.toArray();
    if(data.length > 0) {
        console.log('We have source data in the database...');
        return false;
    }
    console.log('We don\'t found source data in the database...');
    await initialStoreData();
    return false;
}

const initialStoreData = async (): Promise<void> => {
    console.log('Create initial store data');
    await Object.values(useStoradData())?.forEach((data, key, arr) => db.source.add(data));
    console.log('Complete initial store data');
}

console.log("Check Database...");
checkSourceData();

console.log("Run Scrapper...");
useScrapper();
console.log("End Scrapper...");
