import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDeputadosService } from '../search-deputados.service';
import { ItemSelectedList } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-btn-search',
  templateUrl: './btn-search.component.html',
})
export class BtnSearchComponent {
  constructor(
    private router: Router,
    private searchService: SearchDeputadosService
  ) {}

  goToParlamentar(): void {
    let id: number = 0;
    this.searchService.getSearchTerm().subscribe((parm: ItemSelectedList) => {
      id = parm.selected.id;
    });
    this.router.navigate([`parlamentar/${id}`]);
  }
}
