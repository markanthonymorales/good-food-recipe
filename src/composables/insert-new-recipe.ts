import { db } from "../composables/db";
import axios from 'axios';

const useInsertRecipe = async(link: string) => {
    if(link === '') {
        return;
    }

    let response: any = await axios.get(link);
    if(!response) {
        return;
    }
    
    const parser: DOMParser = new DOMParser();

    const html = parser.parseFromString(response.data, "text/html");

    let title: string = html.querySelector('.wprm-recipe-name')?.textContent ?? '';
    if(title === '') {
        return;
    }
    
    let ingredients: Array<string> = [];
    html.querySelector('.wprm-recipe-ingredients')?.childNodes.forEach((node: any) => {
        ingredients.push(node.textContent);
    });

    let instructions: Array<string> = [];
    html.querySelector('.wprm-recipe-instructions')?.childNodes.forEach((node: any) => {
        instructions.push(node.textContent);
    });

    let nutrients: Array<string> = [];
    html.querySelector('.wprm-nutrition-label-container')?.childNodes.forEach((node: any) => {
        nutrients.push(node.textContent);
    });

    await db.recipes.add({
        title: title,
        instructions: instructions,
        ingredients: ingredients,
        nutrients: nutrients,
        notes: [],
        source: link
    });

    // @ts-ignore
    document.querySelector('#alert').textContent = 'Successfully add new ['+title+'] recipe...';
    return;
}

export default useInsertRecipe;
