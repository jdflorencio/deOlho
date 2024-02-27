import { Component } from '@angular/core';
import { DeputadosType } from 'src/app/models/deputadosData';
import { deputadosDataList } from 'src/app/services/deputadosDataList';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent {
  items: DeputadosType[] = [];
  search: string = '';

  constructor() {}

  onSearch() {}
}
