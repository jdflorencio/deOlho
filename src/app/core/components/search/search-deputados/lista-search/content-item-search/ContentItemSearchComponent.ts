import { Component, Input } from '@angular/core';
import { DeputadosType } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-content-item-search',
  template: `
    <div class="flex p-2 mt-4 items-center gap-x-6">
      <img class=" h-14 w-12 rounded-full" [src]="item.urlFoto" alt="" />
      <div>
        <h2 class="font-sans">{{ item.nome }}</h2>
        <p class="text-sm font-semibold leading-6 text-indigo-600">
          {{ item.siglaPartido }}/{{ item.siglaUf }}
        </p>
      </div>
    </div>
  `,
})
export class ContentItemSearchComponent {
  @Input() item: any;
}
