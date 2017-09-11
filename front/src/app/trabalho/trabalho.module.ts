import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalhoRoutingModule } from './trabalho-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    TrabalhoRoutingModule
  ],
  declarations: [ListComponent]
})
export class TrabalhoModule { }
