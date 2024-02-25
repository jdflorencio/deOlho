import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContentComponent } from './pages/components/content/content.component';
import { ContentHeaderComponent } from './pages/components/content-header/content-header.component';
import { ContentFooterComponent } from './pages/components/content-footer/content-footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentFooterComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, SobreComponent],
})
export class ResourcesModule {}
