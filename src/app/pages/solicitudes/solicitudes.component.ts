import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent  implements OnInit {

  verMisSolicitudes:boolean = true
  tiposSolicitudes: any[] = [
    {
      "codigo": "beca",
      "descripcion": "Solicitud de beca"
    },
    {
      "codigo": "carta_estudio",
      "descripcion": "Carta de estudios"
    },
    {
      "codigo": "record_nota",
      "descripcion": "Record de nota"
    }
  ]

  solicitudes: any[] = [
    {
      "id": 7,
      "usuarioId": 137,
      "tipo": "beca",
      "descripcion": "no se",
      "estado": "Pendiente",
      "fechaSolicitud": "2024-11-28T01:35:24.023914",
      "fechaRespuesta": null,
      "respuesta": null
    }
  ]

  tipoSolicitud: string = ""
  descripcionSolicitud: string = ""

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    try {
      await this.misSolicitudes()
      await this.obtenerTiposSolicitudes
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
      this.misSolicitudes()
    })
  }

  async cancelarSolicitud(id: number) {
    await this.apiService.cancelarSolicitud(id).then(() => {
      this.misSolicitudes()
    })
  }


  cambiarVista($event: any) {
    console.log($event.detail.value);
    this.verMisSolicitudes = $event.detail.value === 'true';
    console.log(this.verMisSolicitudes);
    
  }

}
