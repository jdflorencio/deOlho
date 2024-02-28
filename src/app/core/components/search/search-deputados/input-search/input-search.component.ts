import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemSelectedList } from 'src/app/models/deputadosData';
import { SearchDeputadosService } from '../search-deputados.service';

@Component({
  selector: 'app-input-search',
  template: `
    <div>
      <input
        [(ngModel)]="search"
        (ngModelChange)="onSearchChange()"
        placeholder="Digite aqui o nome do deputado"
        type="text"
        class="
            w-full 
            border rounded-md 
            p-2  
            bg-gradient-to-t from-gray-50 from-10%  to-gray-150 to-90%"
      />
      <ng-template [ngIf]="!selected && search.length >= 3">
        <app-lista-search
          (itemSelectedList)="ItemSelectedList($event)"
          [digitou]="search"
        ></app-lista-search>
      </ng-template>
    </div>
  `,
})
export class InputSearchComponent {
  search: string = '';
  selected: boolean = false;

  constructor(private searchDeputadosService: SearchDeputadosService) {}

  ItemSelectedList(data: ItemSelectedList): void {
    if (data.selected) {
      this.searchDeputadosService.setSearchTerm(data);
      this.selected = data.isSelected;
    }
  }

  onSearchChange() {
    this.selected = false;
  }
}
