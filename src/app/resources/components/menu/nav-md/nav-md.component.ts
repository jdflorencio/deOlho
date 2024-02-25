import { Component, Input } from '@angular/core';
import { MenuList } from '../models/menu-list';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-nav-md',
  templateUrl: './nav-md.component.html'
})
export class NavMdComponent {
  @Input() menuList: MenuList;
  house = faHouse;
  faFontAwesome = faFontAwesome;

  constructor() {
    this.menuList = [];
  }
}
