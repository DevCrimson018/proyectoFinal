import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-preseleccion',
  templateUrl: './preseleccion.component.html',
  styleUrls: ['./preseleccion.component.scss'],
})
export class PreseleccionComponent  implements OnInit {

  codigoMateriaDisponible: string = ""

  verMiPreseleccion:boolean = true

  materiasDisponibles: any[] = []

  preselecciones: any[] = []

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    await this.verPreseleccion() 
    await this.obtenerMateriasDisponibles()
  }


  async verPreseleccion() {
    this.apiService.verPreseleccion().then(res => {
      this.preselecciones = res.data
    })
  }


  obtenerMateriasDisponibles() {
    this.apiService.materiasDisponibles().then(res => {
      this.materiasDisponibles = res.data
    })
  }
  preSeleccionarMateria() {
    this.apiService.preseleccionarMateria(this.codigoMateriaDisponible).then(() => {
      this.verPreseleccion()
    })
  }

  cancelarPreseleccion(codigo: string) {
    this.apiService.cancelarPreseleccionarMateria(codigo).then(() => {
      this.verPreseleccion()
    })
  }
}
