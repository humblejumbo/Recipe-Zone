import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
    declarations:[
        RecipeComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailsComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        ShortenPipe
    ],
    imports:[
        ReactiveFormsModule,
        SharedModule,
        RecipeRoutingModule
    ],
})

export class RecipeModule{

}