import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'horarios',
        pathMatch: 'full'
      },
      {
        path: 'horarios',
        loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
      },
      {
        path: 'mis-tareas',
        loadChildren: () => import('./mis-tareas/mis-tareas.module').then(m => m.MisTareasPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: '',
        redirectTo: 'horarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/horarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
