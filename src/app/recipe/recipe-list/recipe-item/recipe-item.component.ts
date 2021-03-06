import { Component, OnInit, Input } from '@angular/core';
import {Recipe } from '../../recipe.model'
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recserv:RecipeService) { }

  ngOnInit() {
  }

  @Input() recipe:Recipe;
  @Input() index:number;

  selectItem()
  {
    this.recserv.getrecipe(this.index);
  }
}
