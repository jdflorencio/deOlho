import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './resources/pages/home/home.component';
import { SobreComponent } from './resources/pages/sobre/sobre.component';
import { MenuModule } from './resources/components/menu/menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, SobreComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
