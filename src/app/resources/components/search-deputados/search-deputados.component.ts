import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-deputados',
  templateUrl: './search-deputados.component.html',
})
export class SearchDeputadosComponent implements OnInit {
  @Input() search: string = '';

  ngOnInit(): void {
    
  }
}
