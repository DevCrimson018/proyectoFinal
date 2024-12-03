import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent  implements OnInit {

  videos: any[] = []

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    this.apiService.videos().then(res => {
      this.videos = res
    })
  }



}
