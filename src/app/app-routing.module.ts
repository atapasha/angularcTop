import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'card',
    pathMatch: 'full',
    component: CardComponent

  },
  {
    path: '',
    pathMatch: 'full',

    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
