import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioLrhzComponent } from './components/formulario-lrhz/formulario-lrhz.component';
import { ListadoNoticiasLrhzComponent } from './components/listado-noticias-lrhz/listado-noticias-lrhz.component';
import { NavbarLrhzComponent } from './components/navbar-lrhz/navbar-lrhz.component';
import { SpinnerLrhzComponent } from './shared/spinner-lrhz/spinner-lrhz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormularioLrhzComponent,
    ListadoNoticiasLrhzComponent,
    NavbarLrhzComponent,
    SpinnerLrhzComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
