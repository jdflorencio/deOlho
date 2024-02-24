import { Component, Input, OnInit } from '@angular/core';
import { MenuList } from './models/menu-list';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Input() menuBody: MenuList = [];

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuBody = this.menuService.getMenuList();
  }
}
