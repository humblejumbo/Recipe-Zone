import {Http,Response} from '@angular/http';
import { Recipe } from '../recipe/recipe.model';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Authservice } from '../auth/auth.service';
import { Ingredient } from './ingredients.model';


@Injectable()
export class DataStorageService{

    constructor(private http:Http,private authserv:Authservice){}

    savedRecipes(recipes:Recipe[])
    {
        const token = this.authserv.getToken();
        return this.http.put('https://recipe-zone.firebaseio.com/recipes.json?auth='+token,recipes);
    }

    fetchRecipes()
    {
        return this.http.get('https://recipe-zone.firebaseio.com/recipes.json')
        .map(
            (response:Response)=>{
            let recipes=response.json();

            for(let recipe of recipes)
            {
                if(!recipe['ingredients'])
                {
                    recipe['ingredients'] = [];
                }
                
            }
            return recipes;
        });
    }

    savedIngredients(ingredients:Ingredient[])
    {
        const token = this.authserv.getToken();
        return this.http.put('https://recipe-zone.firebaseio.com/shoppingList.json?auth=' + token,ingredients);  
    }

    fetchIngredients()
    {
        return this.http.get('https://recipe-zone.firebaseio.com/shoppingList.json')
        .map((response:Response)=>
            {
                let ingredients=response.json();
                return ingredients;
            });
        
    }
}