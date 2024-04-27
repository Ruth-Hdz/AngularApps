import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarAssmComponent } from './components/navbar-assm/navbar-assm.component';
import { ConvertidorAssmComponent } from './components/convertidor-assm/convertidor-assm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAssmComponent,
    ConvertidorAssmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
