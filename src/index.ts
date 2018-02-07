import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { ACPortalService } from './portal.service';

export * from './portal.service';

@NgModule({
  imports: [
    CommonModule,
    PortalModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class AngularContentPortalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularContentPortalModule,
      providers: [ACPortalService]
    };
  }
}
