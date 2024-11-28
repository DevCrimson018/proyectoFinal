import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  horarios: any[] = [] 

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    try {
      await this.apiService.horarios().then(res => {
        this.horarios = res
      })
    } catch (error) {
      console.log(error);
      
    }
  }

}
