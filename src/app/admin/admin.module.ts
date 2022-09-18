import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './admin.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { NewColorComponent } from './pages/colors/new-color/new-color.component';
import { SharedModule } from '../shared/shared.module';
import { MakersComponent } from './pages/makers/makers.component';
import { NewMakerComponent } from './pages/makers/new-maker/new-maker.component';
import { CartypeComponent } from './pages/cartype/cartype.component';
import { NewCartypeComponent } from './pages/cartype/new-cartype/new-cartype.component';
import { ArticleFormListComponent } from './components/article-form-list/article-form-list.component';
import { ArticleFormItemComponent } from './components/article-form-item/article-form-item.component';
import { FormColorInputComponent } from './util/form-color-input/form-color-input.component';
import { FormTextInputComponent } from './util/form-text-input/form-text-input.component';
import { SmartCardFormComponent } from './components/smart-card-form/smart-card-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ColorsComponent,
    NewColorComponent,
    FormTextInputComponent,
    FormColorInputComponent,
    MakersComponent,
    NewMakerComponent,
    CartypeComponent,
    NewCartypeComponent,

    ArticleFormListComponent,
    ArticleFormItemComponent,
    SmartCardFormComponent,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
