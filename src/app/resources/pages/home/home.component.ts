import { Component, OnInit } from '@angular/core';
import { DeputadosData } from 'src/app/models/deputadosData';
import { DeputadosService } from 'src/app/services/deputados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  deputados: DeputadosData;

  constructor(private service: DeputadosService) {
    this.deputados = { dados: [] };
  }

  ngOnInit(): void {
    this.getDeputados();
  }

  getDeputados(): void {}

  /*getDeputados(): void {
    this.service.getDeputados().subscribe(
      {
        next: (res) => {
          console.log(res.dados.length);
          return this.deputados = res
        },
        error: (err) => console.error('not found'),
      }, 

    );
  }*/
}
