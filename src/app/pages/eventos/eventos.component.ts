import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent  implements OnInit {

  eventos: any[] = [] 

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
