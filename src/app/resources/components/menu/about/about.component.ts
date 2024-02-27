import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
@Input()  public description: string ='Desenvolvido por: João Diego'

}
