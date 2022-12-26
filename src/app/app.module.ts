import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoToCartComponent } from './go-to-cart/go-to-cart.component';
import { ItemToCartService } from './item-to-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    AddToCartComponent,
    GoToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ItemToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
