import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDeputadosModule } from './search-deputados/search-deputados.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchDeputadosModule],
  exports: [SearchComponent],
})
export class SearchModule {}
