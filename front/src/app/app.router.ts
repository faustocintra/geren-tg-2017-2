import { Routes, RouterModule } from '@angular/router'

import { TrabalhosListaComponent } from './trabalhos/trabalhos-lista/trabalhos-lista.component';
import { TrabalhosFormComponent } from './trabalhos/trabalhos-form/trabalhos-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';

const routes : Routes = [
   {
      path: '',
      component: TrabalhosListaComponent
   },

   {
      path: 'trabalhos',
      component: TrabalhosListaComponent
   },

   {
      path: 'trabalhos/novo',
      component: TrabalhosFormComponent
   },

   {
      path: 'categorias',
      component: CategoriasListaComponent
   },

   {
      path: 'trabalhos/:id',
      component: TrabalhosFormComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)