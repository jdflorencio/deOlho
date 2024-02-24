import { Component, Input } from '@angular/core';
import { MenuList } from './models/menu-list';

@Component({

  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() menuBody: MenuList;

  constructor() {
    this.menuBody = [{
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
  ]
  }
}
