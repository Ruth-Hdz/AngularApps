import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarLrhzComponent } from './components/navbar-lrhz/navbar-lrhz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLrhzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
