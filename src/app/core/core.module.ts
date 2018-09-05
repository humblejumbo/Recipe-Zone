import { NgModule } from "../../../node_modules/@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService } from "../recipe/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { DataStorageService } from "../shared/data-storage.service";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Authservice } from "../auth/auth.service";

@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule,
        NgbCollapseModule
    ],
    exports:[
        HeaderComponent
    ],
    providers: [RecipeService, ShoppingListService, DataStorageService, Authservice],
})

export class CoreModule{

}