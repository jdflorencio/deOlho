import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HomeComponent } from './resources/pages/home/home.component';
import { SobreComponent } from './resources/pages/sobre/sobre.component';
import { MenuModule } from './resources/components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
