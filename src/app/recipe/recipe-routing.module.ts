import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeComponent } from "./recipe.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

const recipeRoutes:Routes=[
    {
        path: '', component: RecipeComponent,
        children: [
            {
                path: '', component: RecipeStartComponent,pathMatch:'full'
            },
            {
                path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]
            },
            {
                path: ':id', component: RecipeDetailsComponent
            },
            {
                path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]
            }            
        ]
    },
]

@NgModule({

    imports: [RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule],
    providers:[AuthGuard]
})
export class RecipeRoutingModule{

}