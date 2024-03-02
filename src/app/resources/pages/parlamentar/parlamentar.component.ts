import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { DeputadoType, ParamsPagina } from 'src/app/models/deputadosData';
import { DeputadosService } from 'src/app/services/deputados.service';

@Component({
  selector: 'app-parlamentar',
  templateUrl: './parlamentar.component.html',
})
export class ParlamentarComponent implements OnInit {
  deputado: DeputadoType | any;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: DeputadosService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        map((params: Params) => {
          return { id: params['id'] };
        })
      )
      .subscribe((res: ParamsPagina) => {
        this.getBydId(res.id);
      });
  }

  getBydId(id: string): void {
    this.service.getByDeputado(id).subscribe((param: DeputadoType) => {
      this.deputado = param;
    });
  }
}
