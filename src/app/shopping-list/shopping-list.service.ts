import {Ingredient} from '../shared/ingredients.model';
import { Subject } from 'rxjs';


export class ShoppingListService{

    ingredientsChanged= new Subject<Ingredient[]>();
    ingredientEdit= new Subject<number>();

    ingredients: Ingredient[] = []

    getIngredients()
    {
        return this.ingredients.slice();
    }

    getIngredient(index)
    {
        return this.ingredients[index];
    }

    setIngredients(ingredients: Ingredient[])
    {
        this.ingredients = ingredients;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    onInsert(ingredient: Ingredient) 
    {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    onMultipleInsert(ingredients:Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());   
    }

    onRemove(index:number) 
    {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    onReset()
    {
        this.ingredients.splice(0, this.ingredients.length);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    onUpdate(edittedIngredient:Ingredient,index:number)
    {
        this.ingredients[index]=edittedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}