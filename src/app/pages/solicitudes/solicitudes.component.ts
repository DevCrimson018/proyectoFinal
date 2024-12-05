import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent  implements OnInit {

  verMisSolicitudes:boolean = true
  tiposSolicitudes: any[] = []

  solicitudes: any[] = [0]

  tipoSolicitud: string = ""
  descripcionSolicitud: string = ""

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    try {
      await this.misSolicitudes()
      await this.obtenerTiposSolicitudes()
    } catch (error) {
      console.log(error);
      
    }

  }

  async misSolicitudes() {
    this.apiService.misSolicitudes().then(res => {
      this.solicitudes = res.data
    })
  }

  obtenerTiposSolicitudes() {
    this.apiService.tiposSolicitudes().then(res => {
      this.tiposSolicitudes = res.data
    })
  }

  async crearSolicitud() {

    await this.apiService.crearSolicitud(this.tipoSolicitud, this.descripcionSolicitud).then(() => {

      this.misSolicitudes().then(() => {
        alert("Solicitud Agregada")
      })
    })
      
  }

  async cancelarSolicitud(id: number) {
    await this.apiService.cancelarSolicitud(id).then(() => {
      this.misSolicitudes().then(() => {
        alert("Solicitud Cancelada")
      })
    })
  }


  cambiarVista($event: any) {
    console.log($event.detail.value);
    this.verMisSolicitudes = $event.detail.value === 'true';
    console.log(this.verMisSolicitudes);
    
  }

}
