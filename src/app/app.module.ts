import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { ArticleFormListComponent } from './pages/components/article-form-list/article-form-list.component';

@NgModule({
  declarations: [AppComponent, ArticleFormListComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
