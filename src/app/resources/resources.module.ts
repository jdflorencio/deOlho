import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContentComponent } from './pages/components/content/content.component';
import { ContentHeaderComponent } from './pages/components/content-header/content-header.component';
import { ContentFooterComponent } from './pages/components/content-footer/content-footer.component';
import { HomeTitleComponent } from './pages/components/home-title/home-title.component';
import { SearchDeputadosComponent } from './components/search-deputados/search-deputados.component';
import { ListSearchComponent } from './components/search-deputados/list-search/list-search.component';
import { InputSearchComponent } from './components/search-deputados/input-search/input-search.component';
import { BtnSearchComponent } from './components/search-deputados/btn-search/btn-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentFooterComponent,
    HomeTitleComponent,
    SearchDeputadosComponent,
    
    ListSearchComponent,
    InputSearchComponent,
    BtnSearchComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, SobreComponent],
})
export class ResourcesModule {}
