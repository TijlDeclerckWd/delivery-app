export interface Ingredient {
    id: number;
    name: string;
    description: string;
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
    categories: Array<string>;
    imageUrl: string;
}