import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemSelectedList } from 'src/app/models/deputadosData';
import { SearchDeputadosService } from '../search-deputados.service';

@Component({
  selector: 'app-input-search',
  templateUrl: 'input-search.component.html'
})
export class InputSearchComponent {
  search: string = '';
  selected: boolean = false;

  constructor(private searchDeputadosService: SearchDeputadosService) {}

  ItemSelectedList(data: ItemSelectedList): void {
    if (data.selected) {
      this.searchDeputadosService.setSearchTerm(data);
      this.selected = data.isSelected;
      this.search = data.selected.nome;
    }
  }

  onSearchChange() {
    this.selected = false;
  }
}
