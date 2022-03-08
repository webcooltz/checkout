import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';

import { CartComponent } from './landing/cart/cart.component';
import { CartListComponent } from './landing/cart/cart-list/cart-list.component';
import { CartItemComponent } from './landing/cart/cart-list/cart-item/cart-item.component';

import { MenuComponent } from './landing/menu/menu.component';
import { MenuListComponent } from './landing/menu/menu-list/menu-list.component';
import { MenuItemComponent } from './landing/menu/menu-list/menu-item/menu-item.component';

import { AdminComponent } from './admin/admin.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

import { MenuEditComponent } from './landing/menu/menu-edit/menu-edit.component';
import { MenuEditItemComponent } from './landing/menu/menu-edit/menu-edit-item/menu-edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
    MenuComponent,
    MenuListComponent,
    MenuItemComponent,
    AdminComponent,
    AdminDetailComponent,
    AdminEditComponent,
    MenuEditComponent,
    MenuEditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
