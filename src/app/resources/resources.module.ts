import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContentComponent } from './pages/components/content/content.component';
import { ContentHeaderComponent } from './pages/components/content-header/content-header.component';
import { ContentFooterComponent } from './pages/components/content-footer/content-footer.component';
import { HomeTitleComponent } from './pages/components/home-title/home-title.component';
import { SearchDeputadosComponent } from './components/search-deputados/search-deputados.component';

import { InputSearchComponent } from './components/search-deputados/input-search/input-search.component';
import { BtnSearchComponent } from './components/search-deputados/btn-search/btn-search.component';

import { CounterCharactersPipePipe } from '../core/pipes/counter-characters-pipe/counter-characters-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './components/search-deputados/search-filter-pipe/search-filter.pipe';
import { ParlamentarComponent } from './pages/parlamentar/parlamentar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentFooterComponent,
    HomeTitleComponent,
    SearchDeputadosComponent,
    InputSearchComponent,
    BtnSearchComponent,
    CounterCharactersPipePipe,
    SearchFilterPipe,
    ParlamentarComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent, SobreComponent],
})
export class ResourcesModule {}
