import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CartypeComponent } from './cartype.component';
import { NewCartypeComponent } from './new-cartype/new-cartype.component';

const routes: Routes = [
  {
    path: '',
    component: CartypeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'new',
        component: NewCartypeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartypesRoutingModule {}
