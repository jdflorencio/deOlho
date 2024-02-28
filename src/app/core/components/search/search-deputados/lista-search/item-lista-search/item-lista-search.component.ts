import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeputadosType, ItemSelectedList } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-item-lista-search',
  template: `
    <li
      class=" hover:text--900 hover:bg-gray-100 hover:border hover:rounded-md"
      *ngFor="let item of items | searchFilterPipe : digitou"
      (click)="selecting(item)"
    >
      <app-content-item-search [item]="item"></app-content-item-search>
    </li>
  `,
})
export class ItemListaSearchComponent {
  @Input() digitou: string = '';
  @Output() itemSelectedListItem = new EventEmitter<ItemSelectedList>();
  items: DeputadosType[] = [];

  selecting(deputadoSelected: DeputadosType): void {
    this.itemSelectedListItem.emit({
      selected: deputadoSelected,
      isSelected: true,
    });
  }
}
