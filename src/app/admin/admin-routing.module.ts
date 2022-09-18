import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CartypeComponent } from './pages/cartype/cartype.component';
import { NewCartypeComponent } from './pages/cartype/new-cartype/new-cartype.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { NewColorComponent } from './pages/colors/new-color/new-color.component';
import { HomeComponent } from './pages/home/home.component';
import { MakersComponent } from './pages/makers/makers.component';
import { NewMakerComponent } from './pages/makers/new-maker/new-maker.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'colors',
        component: ColorsComponent,
      },
      {
        path: 'colors/new',
        component: NewColorComponent,
      },
      {
        path: 'makers',
        component: MakersComponent,
      },
      {
        path: 'makers/new',
        component: NewMakerComponent,
      },
      {
        path: 'cartypes',
        component: CartypeComponent,
      },
      {
        path: 'cartypes/new',
        component: NewCartypeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
