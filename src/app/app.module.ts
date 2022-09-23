import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModule } from './admin/admin.module';
import { ColorsComponent } from './admin/pages/colors/colors.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ColorsComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
