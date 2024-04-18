import Dexie, { Table } from 'dexie';
import { Source } from '../types/source-type';
import { Recipes } from '../types/recipes-type';

export class MySubClassedDexie extends Dexie {
  // 'recipes' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  recipes!: Table<Recipes>;
  source!: Table<Source>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
        recipes: '++id, title, ingredients, instructions, notes, nutrients, source', // Primary key and indexed props
        source: '++id, title, link',
    });
  }
}

export const db = new MySubClassedDexie();