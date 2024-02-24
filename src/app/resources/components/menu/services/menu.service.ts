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
        icon: '',
      },
      {
        title: 'Descricao1',
        description: 'Va direto para opção 1',
        link: '#',
        icon: '',
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
