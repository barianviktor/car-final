import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { NewColorComponent } from './pages/colors/new-color/new-color.component';
import { DesignComponent } from './pages/design/design.component';
import { NewDesignComponent } from './pages/design/new-design/new-design.component';
import { MakersComponent } from './pages/makers/makers.component';
import { NewMakerComponent } from './pages/makers/new-maker/new-maker.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminComponent,
    /*     children: [
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
        path: 'designs',
        component: DesignComponent,
      },
      {
        path: 'designs/new',
        component: NewDesignComponent,
      },
    ], */
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
