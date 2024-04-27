import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesLrhzComponent } from './digimones-lrhz/digimones-lrhz.component';
import { DigimonesLrhzServices } from './digimones-lrhz/digimones-lrhz.service';
import { HttpClientModule } from '@angular/common/http';

 @NgModule({
  declarations: [
    AppComponent,
    DigimonesLrhzComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DigimonesLrhzServices,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
