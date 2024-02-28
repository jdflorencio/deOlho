import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchDeputadosService {
  private resultSeletd = new BehaviorSubject<any>({});

  setSearchTerm(itemSelectd: any) {
    this.resultSeletd.next(itemSelectd);
  }

  getSearchTerm() {
    return this.resultSeletd.asObservable();
  }
}
