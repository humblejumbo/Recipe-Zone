import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private recserv:RecipeService) { }

  id: number;
  editMode=false;  
  recipeForm:FormGroup;
  ngOnInit() {
    this.route.params.subscribe(
                                (params:Params)=>{
                                  this.id=this.route.params['id']=params['id'];
                                  this.editMode=(params['id']!=null);
                                  this.initForm();
                                })
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSave()
  {
   let recipe=this.recipeForm.value;
   if(this.editMode)
   {
     this.recserv.updateRecipe(this.id,recipe);
   }
   else
   {
     this.recserv.addRecipe(recipe);
   }

    this.router.navigate(['../'], { relativeTo: this.route });

  }

  onCancel()
  {
    this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  addIngredient()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('',[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  removeIngredient(index:number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm()
  { 
    let recipename='';
    let imagepath='';
    let description='';
    let recipeingredients=[];

    if(this.editMode)
    {
      let recipe = this.recserv.getrecipe(this.id);
      recipename=recipe.name;
      imagepath=recipe.imagePath;
      description=recipe.description;
      if(recipe.ingredients)
      {
        for(let ingredient of recipe.ingredients)
        {
          recipeingredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm=new FormGroup({
      name:new FormControl(recipename,Validators.required),
      imagePath: new FormControl(imagepath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients:new FormArray(recipeingredients)
    });

  }

}
