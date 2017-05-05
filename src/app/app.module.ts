import { ItemComponent } from './shopping/item/item.component';
import { CategoryComponent } from './shopping/category/category.component';
import { ShoppingCar } from './model/shopping';
import { Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ListComponent } from './Shopping/list/list.component';
import { ItemEditorComponent } from './Shopping/item-editor/item-editor.component';
import { ShoppingCarComponent } from './Shopping/shopping-car/shopping-car.component';
import { LoginComponent } from './login/login/login.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { ShoppingListComponent } from './account/shopping-list/shopping-list.component';
import { ShoppingCarService } from "app/service/shopping-car.service";
import { ShoppingDataService } from "app/service/shopping-data.service";

const appRouters : Routes = [
  {path:'',component:ShoppingComponent},
  {path:'shopping',component:ShoppingComponent,children:[
    {path:':cid',component:CategoryComponent},
    {path:':cid/:id',component:ItemComponent}
  ]},
  {path:'shoppingcar',component:ShoppingCarComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'my',component:MyaccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ListComponent,
    ItemComponent,
    ItemEditorComponent,
    ShoppingCarComponent,
    LoginComponent,
    MyaccountComponent,
    ShoppingListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [ShoppingCarService,ShoppingDataService],
  bootstrap: [AppComponent]
})



export class AppModule { }
