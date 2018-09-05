import { OnInit, Injectable} from '@angular/core'
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService implements OnInit{

    recipeChanged=new Subject<Recipe[]>();

    constructor(private shopserv:ShoppingListService){}

    recipes: Recipe[] = [
        // new Recipe('Pizza', 'A Delicious Italian treat!!', 'https://recipes.timesofindia.com/photo/53110049.cms',
        //     [new Ingredient('Tomato', 5), new Ingredient('Onion', 4), new Ingredient('Capsicum',3)]),
        // new Recipe('Burger', 'I just love it', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4KQScxEnI7MlvbxijIRB1RhSAp3VKhJV9Im_RNrb1UVJduRk',
        //     [new Ingredient('Buns', 2), new Ingredient('Cheese',3)])
    ];

    ingredients:Ingredient[]=[];

    ngOnInit(){
    }

    getrecipes()
    {
        return this.recipes.slice();
    }

    getrecipe(index:number)
    {
        return this.recipes[index];
    }

    setRecipes(recipes:Recipe[])
    {
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    addRecipe(recipe:Recipe)
    {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,updatedRecipe:Recipe)
    {
        this.recipes[index]=updatedRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    removeRecipe(index:number)
    {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
    addToShopList(ingredients: Ingredient[])
    {
        this.shopserv.onMultipleInsert(ingredients);    
    }

}