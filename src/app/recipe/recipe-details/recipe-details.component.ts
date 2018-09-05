import { Component, DoCheck} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements DoCheck {

  recEl: Recipe;
  id:number;
  constructor(private recserv:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngDoCheck() {
    this.route.params.subscribe(
                                (params:Params)=>{
                                  this.id = +params['id'];
                                  this.recEl=this.recserv.getrecipe(this.id);
    });
  }
  
  AddtoSl()
  {
    let recipe=this.recEl
    this.recserv.addToShopList(recipe.ingredients);
  }

  deleteRecipe()
  {
    this.recserv.removeRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
