import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-deputados',
  template: `
    <div class="flex  w-200   ">
      <div class="flex-1 w-80 m-2">
        <app-input-search></app-input-search>
      </div>
      <div class="mt-2">
        <app-btn-search></app-btn-search>
      </div>
    </div>
  `,
})
export class SearchDeputadosComponent implements OnInit {
  @Input() search: string = '';

  ngOnInit(): void {}
}
