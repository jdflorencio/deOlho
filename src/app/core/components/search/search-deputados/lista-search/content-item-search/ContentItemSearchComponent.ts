import { Component, Input } from '@angular/core';
import { DeputadosType } from 'src/app/models/deputadosData';

@Component({
  selector: 'app-content-item-search',
  templateUrl: 'ContentItemSearchComponent.html'
})
export class ContentItemSearchComponent {
  @Input() item: any;
}
