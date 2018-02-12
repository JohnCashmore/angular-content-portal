import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularContentPortalModule } from './modules/portal/portal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AngularContentPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
