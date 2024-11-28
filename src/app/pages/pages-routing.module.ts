import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { EventosComponent } from './eventos/eventos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { DeudaComponent } from './deuda/deuda.component';
import { PreseleccionComponent } from './preseleccion/preseleccion.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  },
  {
    path: 'deudas',
    component: DeudaComponent
  },
  {
    path: 'preseleccion',
    component: PreseleccionComponent
  },
  {
    path: 'acerda-de',
    component: AcercaDeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
