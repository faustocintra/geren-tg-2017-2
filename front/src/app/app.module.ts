import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.router'

import { AppComponent } from './app.component';
import { TrabalhosListaComponent } from './trabalhos/trabalhos-lista/trabalhos-lista.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabalhosListaComponent,
    CategoriasListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
