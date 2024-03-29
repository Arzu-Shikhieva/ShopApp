import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import {AlertifyService} from './services/alertify.service';
import { LoginComponent } from './login/login.component';
import {AccountService} from './services/account.service';
import {LoginGuard} from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddFormsComponent,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
