import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartypeComponent } from './cartype.component';
import { CartypesRoutingModule } from './cartypes-routing.module';
import { ArticleFormItemComponent } from './components/article-form-item/article-form-item.component';
import { ArticleFormListComponent } from './components/article-form-list/article-form-list.component';
import { DesignFormInputComponent } from './components/design-form-input/design-form-input.component';
import { ImagesFormListComponent } from './components/images-form-list/images-form-list.component';
import { ModelFormInputComponent } from './components/model-form-input/model-form-input.component';
import { SmartCardFormComponent } from './components/smart-card-form/smart-card-form.component';
import { SmartCardsListComponent } from './components/smart-cards-list/smart-cards-list.component';
import { SmartpointFormComponent } from './components/smartpoint-form/smartpoint-form.component';
import { HomeComponent } from './home/home.component';
import { NewCartypeComponent } from './new-cartype/new-cartype.component';

@NgModule({
  declarations: [
    ArticleFormItemComponent,
    ArticleFormListComponent,
    DesignFormInputComponent,
    ImagesFormListComponent,
    ModelFormInputComponent,
    SmartCardFormComponent,
    SmartCardsListComponent,
    SmartpointFormComponent,
    HomeComponent,
    NewCartypeComponent,
    CartypeComponent,
  ],
  imports: [SharedModule, CartypesRoutingModule],
})
export class CartypesModule {}
