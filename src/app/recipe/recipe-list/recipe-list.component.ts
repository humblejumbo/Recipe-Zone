import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipeSubscription:Subscription;
  recipes:Recipe[]=[];


  constructor(private recserv:RecipeService) {     
  }

  ngOnInit() {
    
    this.recipeSubscription=this.recserv.recipeChanged.subscribe(
                                                    (recipes:Recipe[])=>{
                                                         this.recipes=recipes;       
    });
    this.recipes=this.recserv.getrecipes();
  }

  ngOnDestroy()
  {
    this.recipeSubscription.unsubscribe();
  }

}
