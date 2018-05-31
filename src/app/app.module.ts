import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AngularContentPortalModule } from './modules/portal/portal.module';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule, AngularContentPortalModule],
  exports: [AngularContentPortalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
