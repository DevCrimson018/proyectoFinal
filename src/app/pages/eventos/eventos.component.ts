import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent  implements OnInit {

  eventos: any[] = [
    {
      "id": 1,
      "titulo": "Cumple anios del profesor",
      "descripcion": "El profesor Amadis Cumple anios",
      "fechaEvento": "2025-05-24T20:02:39",
      "lugar": "ITLA",
      "coordenadas": "18.477011029492324, -69.8365311114267"
    }
  ]

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.obtenerEventos()
  }

  obtenerEventos() {
    this.apiService.eventos().then(res => {
      this.eventos = res
    })
  }

}
