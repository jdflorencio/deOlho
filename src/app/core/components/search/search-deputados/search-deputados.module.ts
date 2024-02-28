import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListaSearchComponent } from './lista-search/item-lista-search/item-lista-search.component';
import { BtnSearchComponent } from './btn-search/btn-search.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { ListaSearchComponent } from './lista-search/lista-search.component';
import { SearchFilterPipe } from './search-filter-pipe/search-filter.pipe'
import { SearchDeputadosComponent } from './search-deputados.component';
import { ContentItemSearchComponent } from './lista-search/content-item-search/ContentItemSearchComponent';


@NgModule({
  declarations: [
    SearchFilterPipe,
    ListaSearchComponent,
    ItemListaSearchComponent,
    BtnSearchComponent,
    InputSearchComponent,
    ItemListaSearchComponent,
    SearchDeputadosComponent,
    ContentItemSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [ 
    SearchDeputadosComponent 
  ]
})
export class SearchDeputadosModule { }
