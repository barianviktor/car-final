import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './admin/pages/colors/colors.component';

const routes: Routes = [
  {
    path: 'admin',
    /* loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), */
    component: ColorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
