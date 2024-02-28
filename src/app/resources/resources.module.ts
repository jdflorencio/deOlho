import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContentComponent } from './pages/components/content/content.component';
import { ContentHeaderComponent } from './pages/components/content-header/content-header.component';
import { ContentFooterComponent } from './pages/components/content-footer/content-footer.component';
import { HomeTitleComponent } from './pages/components/home-title/home-title.component';


import { CounterCharactersPipePipe } from '../core/pipes/counter-characters-pipe/counter-characters-pipe.pipe';
import { FormsModule } from '@angular/forms';

import { ParlamentarComponent } from './pages/parlamentar/parlamentar.component';

import { SearchModule } from '../core/components/search/search.module';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentFooterComponent,
    HomeTitleComponent,
    CounterCharactersPipePipe,
    ParlamentarComponent,
    
    
  ],
  imports: [CommonModule, FormsModule, SearchModule, SearchModule],
  exports: [HomeComponent, SobreComponent],
})
export class ResourcesModule {}
