import { Component, Input, OnInit } from '@angular/core';
import { MenuList } from './models/menu-list';
import { MenuService } from './services/menu.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  
})
export class MenuComponent implements OnInit {
  @Input() menuBody: MenuList = [];
  faCoffee = faCoffee;
  faFontAwesome = faFontAwesome;
  

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuBody = this.menuService.getMenuList();
  }
}
