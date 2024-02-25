import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavDefaultComponent } from './nav-default/nav-default.component';
import { NavMdComponent } from './nav-md/nav-md.component';
import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importe o FontAwesomeModule

@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    NavDefaultComponent,
    NavMdComponent,
    MenuComponent,
    
  ],
  imports: [
    CommonModule, 
    FontAwesomeModule  
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
