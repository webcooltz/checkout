import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';

import { CartComponent } from './landing/cart/cart.component';
import { CartListComponent } from './landing/cart/cart-list/cart-list.component';
import { CartItemComponent } from './landing/cart/cart-list/cart-item/cart-item.component';

import { MenuComponent } from './landing/menu/menu.component';
import { MenuListComponent } from './landing/menu/menu-list/menu-list.component';
import { MenuItemComponent } from './landing/menu/menu-list/menu-item/menu-item.component';

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
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
