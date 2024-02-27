import { Injectable } from '@angular/core';
import { MenuList } from '../models/menu-list';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenuList(): MenuList {
    return [
      {
        title: 'Home',
        description: 'Va direto para opção 1',
        link: '/',
        icon: 'fa-solid fa-house',
      },
  
      {
        title: 'Sobre',
        description: 'Va direto para opção 1',
        link: '/sobre',
        icon: '',
      },
    ];
  }
}
