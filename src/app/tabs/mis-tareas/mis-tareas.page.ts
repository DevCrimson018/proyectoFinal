import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.page.html',
  styleUrls: ['./mis-tareas.page.scss'],
})
export class MisTareasPage implements OnInit {

  tareas: any[] = []

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    this.apiService.tareas().then(res => {
      this.tareas = res.data
    })
  }


}
