import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.page.html',
  styleUrls: ['./mis-tareas.page.scss'],
})
export class MisTareasPage implements OnInit {

  tareas: any[] = [
    {
      "id": 1,
      "usuarioId": 1,
      "titulo": "Proyecto FInal de Apss",
      "descripcion": "Hacer el proyecto lo mejor posible",
      "fechaVencimiento": "2024-12-27T20:15:21",
      "completada": false
    },
    {
      "id": 2,
      "usuarioId": 1,
      "titulo": "Puntos extras",
      "descripcion": "Realiza el proyecto final completo que no le falte nada... y soprende al maestro con cosas positivas, para que puedas tener la remota posibilidad de ganar puntos extras.",
      "fechaVencimiento": "2024-12-05T19:21:32",
      "completada": true
    }
  ]

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    this.apiService.tareas().then(res => {
      this.tareas = res.data
    })
  }


}
