import { db } from "./composables/db";
import { useStoradData } from "./composables/data-compiler";

const checkRecipes = async (): Promise<boolean> => {
    const data: any = await db.recipes.toArray();
    if(data.length > 0) {
        console.log('We have recipes data in the database...');
        return false;
    }
    console.log('We don\'t found recipe data in the database...');
    await initialStoreData();
    return false;
}

const initialStoreData = async (): Promise<void> => {
    console.log('Create initial store data');
    await Object.values(useStoradData())?.forEach((data, key, arr) => db.recipes.add(data));
    console.log('Complete initial store data');
}

console.log("Check Database...");
checkRecipes();
