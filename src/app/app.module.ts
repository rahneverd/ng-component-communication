import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { GoToCartComponent } from './go-to-cart/go-to-cart.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
