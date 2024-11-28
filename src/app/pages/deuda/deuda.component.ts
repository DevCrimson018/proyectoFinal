import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.scss'],
})
export class DeudaComponent  implements OnInit {

  deudas: any[] = []

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
