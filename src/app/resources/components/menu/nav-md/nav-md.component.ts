import { Component, Input } from '@angular/core';
import { MenuList } from '../models/menu-list';

@Component({
  selector: 'app-nav-md',
  templateUrl: './nav-md.component.html'
})
export class NavMdComponent {
  @Input() menuList: MenuList;

  constructor() {
    this.menuList = [];
  }
}
