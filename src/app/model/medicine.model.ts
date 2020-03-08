import { Ingredient } from './ingredient.model';

export class Medicine {
    id: number;
    name: string;
    posology: string;
    expirationDate: string;
    ingredients: Ingredient[];
}