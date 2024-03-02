import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeputadoType, DeputadosData } from '../models/deputadosData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { deputadosDataList } from '../services/deputadosDataList';

@Injectable({
  providedIn: 'root',
})
export class DeputadosService {
  private baseUrl: string = '';
  private deputadosData: DeputadosData | any;
  //list:DeputadosData;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.cameraApi;
    //this.list = {dados:[]}

    
  }

  getByDeputado(id: string): Observable<DeputadoType> {
    this.deputadosData = this.http.get<DeputadosData>(`${this.baseUrl}/deputados/${id}`);
    return this.deputadosData;
  }

  getAllDeputados(): DeputadosData {
    return deputadosDataList;
  }
}
