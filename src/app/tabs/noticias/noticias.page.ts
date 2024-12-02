import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: any[] = [
    {
      "id": "20667",
      "title": "FCS inaugura Cumbre Interdisciplinaria Salud Mental Colectiva",
      "img": "https://uasd.edu.do/wp-content/uploads/6-88.jpg",
      "url": "https://uasd.edu.do/fcs-inaugura-cumbre-interdisciplinaria-salud-mental-colectiva/",
      "date": "noviembre 29, 2024"
    },
    {
      "id": "20659",
      "title": "UASD participa con diversas exposiciones en el Congreso Hispanoamericano de Prensa",
      "img": "https://uasd.edu.do/wp-content/uploads/2-540.jpg",
      "url": "https://uasd.edu.do/uasd-participa-con-diversas-exposiciones-en-el-congreso-hispanoamericano-de-prensa/",
      "date": "noviembre 29, 2024"
    },
    {
      "id": "20654",
      "title": "UASD entrega certificados curso Python para Investigadores",
      "img": "https://uasd.edu.do/wp-content/uploads/3-420.jpg",
      "url": "https://uasd.edu.do/uasd-entrega-certificados-curso-python-para-investigadores/",
      "date": "noviembre 29, 2024"
    },
    {
      "id": "20642",
      "title": "Escuela de Farmacia UASD celebra su aniversario y reconoce a ex directoras y promoción del 1957",
      "img": "https://uasd.edu.do/wp-content/uploads/41c989a6-ef9c-428b-a1f8-8e2982a9f05d.jpg",
      "url": "https://uasd.edu.do/escuela-de-farmacia-uasd-celebra-su-aniversario-y-reconoce-a-ex-directoras-y-promocion-del-1957/",
      "date": "noviembre 29, 2024"
    },
    {
      "id": "20631",
      "title": "La UASD otorga título Doctor Honoris Causa al Presidente Luis Abinader",
      "img": "https://uasd.edu.do/wp-content/uploads/9-23.jpg",
      "url": "https://uasd.edu.do/la-uasd-otorga-titulo-doctor-honoris-causa-al-presidente-luis-abinader/",
      "date": "noviembre 28, 2024"
    },
    {
      "id": "20625",
      "title": "UASD recuerda octavo aniversario del fallecimiento Fidel Castro Ruz",
      "img": "https://uasd.edu.do/wp-content/uploads/TMV_7606LUIS-DE-LEON-scaled.jpg",
      "url": "https://uasd.edu.do/uasd-recuerda-octavo-aniversario-del-fallecimiento-fidel-castro-ruiz/",
      "date": "noviembre 28, 2024"
    },
    {
      "id": "20620",
      "title": "Facultad de Ingeniería y Arquitectura UASD inaugura Semana de la Arquitectura",
      "img": "https://uasd.edu.do/wp-content/uploads/478f3ebd-5ef0-43f5-82ac-3bee474986d4.jpg",
      "url": "https://uasd.edu.do/facultad-de-ingenieria-y-arquitectura-uasd-inaugura-semana-de-la-arquitectura/",
      "date": "noviembre 28, 2024"
    },
    {
      "id": "20614",
      "title": "Inauguran en la UASD XXVIII Congreso Hispanoamericano de Prensa",
      "img": "https://uasd.edu.do/wp-content/uploads/TMV_7658DECANO-DE-FH-UASD-scaled.jpg",
      "url": "https://uasd.edu.do/inauguran-en-la-uasd-xxviii-congreso-hispanoamericano-de-prensa/",
      "date": "noviembre 27, 2024"
    },
    {
      "id": "20608",
      "title": "La UASD y el IDEICE firman convenio para fomentar la investigación científica en educación",
      "img": "https://uasd.edu.do/wp-content/uploads/ca934079-3f60-4b14-8c61-5514ad4a9fe2.jpg",
      "url": "https://uasd.edu.do/la-uasd-y-el-ideice-firman-convenio-para-fomentar-la-investigacion-cientifica-en-educacion/",
      "date": "noviembre 27, 2024"
    },
  ]

  constructor(
    private apiService: ApiServiceService
  ) { }

  async ngOnInit() {
    this.apiService.noticias().then(res => {
      this.noticias = res.data
    })
  }

}
