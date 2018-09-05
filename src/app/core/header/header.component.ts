import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe/recipe.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { Recipe } from '../../recipe/recipe.model';
import { Authservice } from '../../auth/auth.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredients.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private recserv:RecipeService,private dataserv:DataStorageService,
              private authserv:Authservice,private shopserv:ShoppingListService) { }

  ngOnInit() {
    
    this.dataserv.fetchRecipes()
      .subscribe((recipes: Recipe[]) => {
        console.log(recipes);
        this.recserv.setRecipes(recipes);
      },
        (error) => {
          console.log(error);
        });

    this.dataserv.fetchIngredients()
      .subscribe((ingredients:Ingredient[]) => {
        console.log(ingredients);
        this.shopserv.setIngredients(ingredients);
      },
        (error) => {
          console.log(error);
        });
  }

  isCollapsed=true;
  onSave()
  {
    this.dataserv.savedRecipes(this.recserv.getrecipes())
    .subscribe((recipes:Response)=>
                {
                  console.log(recipes);
                },
                (error)=>
                {
                  console.log(error);              
                }) 

  this.dataserv.savedIngredients(this.shopserv.getIngredients())
    .subscribe((ingredients: Response) => {
      console.log(ingredients);
    },
      (error) => {
        console.log(error);
      }) 
  }

  onFetch()
  {
    this.dataserv.fetchRecipes()
      .subscribe((recipes: Recipe[]) => {
        console.log(recipes);
        this.recserv.setRecipes(recipes);
      },
        (error) => {
          console.log(error);
        });

    this.dataserv.fetchIngredients()
      .subscribe((ingredients: Ingredient[]) => {
        console.log(ingredients);
        this.shopserv.setIngredients(ingredients);
      },
        (error) => {
          console.log(error);
        });
  }

  onLogout()
  {
    this.authserv.logout();
  }

  isAuthenticated() {
    return this.authserv.isAuthenticated();
  }

 

}
