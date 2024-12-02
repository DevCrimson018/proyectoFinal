import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent  implements OnInit {

  videos: any[] = [
    {
      "id": 1,
      "titulo": "Himno de la UASD",
      "url": "L8vm3FmNrUk",
      "fechaPublicacion": "2024-11-02T20:11:12"
    },
    {
      "id": 2,
      "titulo": "Video Institucional",
      "url": "foK1vNrhRgU",
      "fechaPublicacion": "2024-07-17T20:12:12"
    }
  ]

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    this.apiService.videos().then(res => {
      this.videos = res
    })
  }



}
