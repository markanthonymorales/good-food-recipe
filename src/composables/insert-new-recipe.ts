import { db } from "../composables/db";
import axios from 'axios';
import useAlert from "../composables/alert";

const useInsertRecipe = async(link: string): Promise<boolean> => {
    if(link === '') {
        return false;
    }

    let response: any = await axios.get(link);
    if(!response) {
        return false;
    }
    
    const html = new DOMParser().parseFromString(response.data, "text/html");

    let title: string = html.querySelector('.wprm-recipe-name')?.textContent ?? '';
    if(title === '') {
        return false;
    }
    
    let ingredients: Array<string> = [];
    html.querySelector('.wprm-recipe-ingredients')?.childNodes.forEach((node: any) => {
        if(node.textContent === '' || node.textContent === ' ') return;
        ingredients.push(node.textContent.replace('▢ ', ''));
    });

    let instructions: Array<string> = [];
    html.querySelector('.wprm-recipe-instructions')?.childNodes.forEach((node: any) => {
        if(node.textContent === '' || node.textContent === ' ') return;
        instructions.push(node.textContent.replace('▢ ', ''));
    });

    let nutrients: Array<string> = [];
    html.querySelector('.wprm-nutrition-label-container')?.childNodes.forEach((node: any) => {
        if(node.textContent === '' || node.textContent === ' ') return;
        nutrients.push(node.textContent.replace('▢ ', ''));
    });

    await db.recipes.add({
        title: title,
        instructions: instructions,
        ingredients: ingredients,
        nutrients: nutrients,
        notes: [],
        source: link
    });

    await useAlert('Successfully add new ['+title+'] recipe...');
    return true;
}

export default useInsertRecipe;
