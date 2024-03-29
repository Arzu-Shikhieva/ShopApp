import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import {ProductAddForms2Component} from './product/product-add-forms2/product-add-forms2.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './login/login.guard';


const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'product-add-1', component: ProductAddFormsComponent, canActivate: [LoginGuard]},
  {path: 'product-add-2', component: ProductAddForms2Component},
  {path: '' , redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/category/:categoryId' , component: ProductComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
