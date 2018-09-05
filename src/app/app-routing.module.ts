import { NgModule } from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./core/home/home.component";


const appRoutes:Routes=[    
    {
        path:'',component:HomeComponent
    },
    {
        path:'recipe',loadChildren:'./recipe/recipe.module#RecipeModule'
    },
    {
        path:'shopping-list',component:ShoppingListComponent
        
    },
    {
        path:'not-found',component:ErrorPageComponent
    },
    {
        path:'**',redirectTo:'not-found'
    }
]

@NgModule({

    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
