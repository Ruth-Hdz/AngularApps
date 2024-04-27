import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarLrhzComponent } from './components/navbar-lrhz/navbar-lrhz.component';
import { ConvertidorLrhzComponent } from './components/convertidor-lrhz/convertidor-lrhz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLrhzComponent,
    ConvertidorLrhzComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
