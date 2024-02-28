import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemSelectedList } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-lista-search',
  template: `
    <div
      class="
    bg-gradient-to-t from-gray-50 from-10%  to-gray-150 to-90% 
    border 
    rounded-md 
    p-3 
    font-medium"
    >
      <ul role="list" class="list-item z-50">
        <app-item-lista-search
          [digitou]="digitou"
          (itemSelectedListItem)="itemSelected($event)"
        ></app-item-lista-search>
      </ul>
    </div>
  `,
})

export class ListaSearchComponent {
  @Input() digitou: string = '';
  @Output() itemSelectedList = new EventEmitter<ItemSelectedList>();

  itemSelected(data: ItemSelectedList) {
    this.itemSelectedList.emit(data);
  }
}
