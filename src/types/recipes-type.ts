export interface Recipes {
    id?: number;
    title?: string;
    ingredients?: Array<string>;
    instructions?: Array<string>;
    notes?: Array<string>;
    nutrients?: Array<string>;
    source?: string|undefined;
}