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

  materiasDisponibles: any[] = [
    {
      "codigo": "DEP003456",
      "nombre": "Esgrima 3",
      "horario": "Lunes 7 am",
      "aula": "Olim 1",
      "ubicacion": "18.47826317813275, -69.91659134942564"
    },
    {
      "codigo": "INF900001",
      "nombre": "Desarrollo De Apps Faciles",
      "horario": "Domingos 4 pm",
      "aula": "Virtual",
      "ubicacion": "18.508787558433312, -69.87762421701359"
    }
  ]

  preselecciones: any[] = [
    {
      "codigo": "DEP003456",
      "nombre": "Esgrima 3",
      "aula": "Olim 1",
      "ubicacion": "18.47826317813275, -69.91659134942564",
      "confirmada": false
    }
  ]

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
