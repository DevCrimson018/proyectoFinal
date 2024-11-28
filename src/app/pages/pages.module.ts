import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { IonicModule } from '@ionic/angular';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DeudaComponent } from './deuda/deuda.component';
import { EventosComponent } from './eventos/eventos.component';
import { PreseleccionComponent } from './preseleccion/preseleccion.component';


@NgModule({
  declarations: [
    PagesComponent,
    VideosComponent,
    SolicitudesComponent,
    AcercaDeComponent,
    DeudaComponent,
    EventosComponent,
    PreseleccionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    IonicModule
  ]
})
export class PagesModule { }
