import { Ingredient } from './Ingredient.type';
import { MealCategory } from './MealCategory.type';

export interface Meal {
    id: number;
    name: string; 
    categories: Array<MealCategory>;
    ingredients: Array<Ingredient>;
    // TODO: this should be a tuple ['id ingredient', grams]
    sizesIngredients: Array<any>
    // TODO: should be [{name: 'xs', percentage: 20}, ...]
    sizesMeals: Array<any>
}