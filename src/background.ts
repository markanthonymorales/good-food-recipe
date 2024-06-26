import { db } from "./composables/db";
import { useStoradData } from "./composables/data-compiler";

const checkSourceData = async (): Promise<boolean> => {
    const data: any = await db.source.toArray();
    if(data.length > 0) {
        console.log('We have source data in the database...');
        return true;
    }
    console.log('We don\'t found source data in the database...');
    await initialStoreData();
    return false;
}

const initialStoreData = async (): Promise<void> => {
    console.log('Create initial store data');
    Object.values(useStoradData())?.forEach( async(data: any) => await db.source.add(data));
    console.log('Complete initial store data');
}

console.log("Check Database...");
checkSourceData();
