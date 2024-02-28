import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './resources/pages/home/home.component';
import { SobreComponent } from './resources/pages/sobre/sobre.component';
import { ParlamentarComponent } from './resources/pages/parlamentar/parlamentar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'parlamentar/:id',
    component: ParlamentarComponent
  },
  {
    path: '**', redirectTo: ''
  }

  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
