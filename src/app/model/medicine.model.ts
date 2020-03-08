import { Ingredient } from './ingredient.model';

export class Medicine {
    id: number;
    name: string;
    posology: string;
    expirationDate: Date;
    ingredients: Ingredient[];
    expand: boolean;
}