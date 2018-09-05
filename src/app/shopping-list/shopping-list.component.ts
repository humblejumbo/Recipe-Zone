import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  
  ingredients:Ingredient[]=[];
  ingredientsSub:Subscription;
  constructor(private shopserv:ShoppingListService) { }

  ngOnInit() {
    
    this.ingredients=this.shopserv.getIngredients();
    this.ingredientsSub=this.shopserv.ingredientsChanged.subscribe(
                                    (ingredients:Ingredient[])=>{
                                            this.ingredients=ingredients
                                     });
  }

  edit(index:number)
  {
    this.shopserv.ingredientEdit.next(index);
  }

  ngOnDestroy()
  {
    this.ingredientsSub.unsubscribe();
  }
}
