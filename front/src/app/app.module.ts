import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrabalhoListaComponent } from './trabalho-lista/trabalho-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabalhoListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
