import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeputadosType, ItemSelectedList } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-item-lista-search',
  templateUrl: 'lista-search.component.html',
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
