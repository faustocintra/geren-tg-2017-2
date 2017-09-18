import { Routes, RouterModule } from '@angular/router'

import { TrabalhosListaComponent } from './trabalhos/trabalhos-lista/trabalhos-lista.component';
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
      path: 'categorias',
      component: CategoriasListaComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)