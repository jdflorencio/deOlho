import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parlamentar',
  templateUrl: './parlamentar.component.html'
})
export class ParlamentarComponent {

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(res => {
      console.log(res)
    })
  }

}
