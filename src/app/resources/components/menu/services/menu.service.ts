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
        title: 'Descricao1',
        description: 'Va direto para opção 1',
        link: '#',
        icon: 'fa-solid fa-house',
      },
      {
        title: 'Descricao1',
        description: 'Va direto para opção 1',
        link: '#',
        icon: '<fa-icon [icon]="house" class="object-contain h-6 w-6 mr-2"></fa-icon>',
      },
      {
        title: 'Descricao1',
        description: 'Va direto para opção 1',
        link: '#',
        icon: '',
      },
    ];
  }
}
