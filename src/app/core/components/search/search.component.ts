import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="flex  w-200   ">
      <div class="flex-1 w-80 m-2">
        <app-search-deputados></app-search-deputados>
      </div>
    </div>
  `,
})
export class SearchComponent {}
