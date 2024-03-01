import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemSelectedList } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-lista-search',
  templateUrl: 'lista-search.component.html',
})

export class ListaSearchComponent {
  @Input() digitou: string = '';
  @Output() itemSelectedList = new EventEmitter<ItemSelectedList>();

  itemSelected(data: ItemSelectedList) {
    this.itemSelectedList.emit(data);
  }
}
