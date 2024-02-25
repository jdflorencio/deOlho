import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeputadosData } from '../models/deputadosData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeputadosService {
  private baseUrl: string = '';
  private deputadosData: DeputadosData | any;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome';

    console.log(environment)
  }

  getDeputados(): Observable<DeputadosData> {
    this.deputadosData = this.http.get<DeputadosData>(
      `${this.baseUrl}`
    );

    return this.deputadosData;
  }
}
