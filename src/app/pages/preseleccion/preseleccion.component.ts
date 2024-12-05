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
      console.log(this.preselecciones);
      
    })
  }


  obtenerMateriasDisponibles() {
    this.apiService.materiasDisponibles().then(res => {
      this.materiasDisponibles = res
      console.log(res);
      
    })
  }
  preSeleccionarMateria() {
    this.apiService.preseleccionarMateria(this.codigoMateriaDisponible).then(() => {
      this.verPreseleccion()
    })
  }

  cancelarPreseleccion(codigo: string) {
    console.log(codigo);
    this.apiService.cancelarPreseleccionarMateria(codigo).then(() => {
      this.verPreseleccion()
    })
  }

  cambiarVista($event: any) {
    console.log($event.detail.value);
    this.verMiPreseleccion = $event.detail.value === 'true';
    console.log(this.verMiPreseleccion);
    
  }
}
