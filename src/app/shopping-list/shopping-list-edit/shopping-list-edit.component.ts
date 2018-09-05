import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit,OnDestroy {

  index:number;
  editMode=false;
  editSubscription:Subscription;
  editItem:Ingredient;
  constructor(private shopserv:ShoppingListService) { }

  @ViewChild('f') shoppingForm;

  ngOnInit() {

   this.editSubscription= this.shopserv.ingredientEdit.subscribe(
                                          (index:number)=>{
                                            this.index=index;
                                            this.editMode=true;
                                            this.editItem=this.shopserv.getIngredient(index);
                                            this.shoppingForm.setValue({
                                              name:this.editItem.name,
                                              amount:this.editItem.amount
                                            });
                                            
    });
  }

  submitIngredient()
  {
    var ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount)
    if(!this.editMode)
    this.shopserv.onInsert(ingredient);
    else
    {
      this.shopserv.onUpdate(ingredient, this.index);
    }
    this.editMode = false;
    this.shoppingForm.reset()
  }


  deleteIngredient()
  {
    this.editMode=false;
    this.shoppingForm.reset();
    this.shopserv.onRemove(this.index);    
  }

  clearIngredient()
  {
    this.editMode=false;
    this.shoppingForm.reset();
    this.shopserv.onReset();  
  }


  ngOnDestroy()
  {
    this.editSubscription.unsubscribe();
  }


}
