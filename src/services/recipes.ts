import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import os from 'os'

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: Date;
}

export const RECIPE_DIRECTORY = join(process.cwd(), 'src/static/recipes');

export const getAvailableRecipes = async (): Promise<Array<string>> => {
  const filenames = await readdir(RECIPE_DIRECTORY);
  
  return filenames
};

export const getRecipe = async (): Promise<Recipe | null> => {
  return null
};