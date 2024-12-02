import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.scss'],
})
export class DeudaComponent  implements OnInit {

  deudas: any[] = [
    {
      "id": 1,
      "usuarioId": 1,
      "monto": 1500,
      "pagada": false,
      "fechaActualizacion": "2024-11-13T16:58:35"
    }
  ]

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.obtenerDeudas()
  }

  obtenerDeudas() {
    this.apiService.deudas().then(res => {
      this.deudas = res
    })
  }

}
