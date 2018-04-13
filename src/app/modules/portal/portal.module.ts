import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { ACPortalService } from './portal.service';
import { ACPortalComponent } from './portal.component';
import { ACPortalOutletComponent } from './portal-outlet.component';

export * from './portal.service';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [ACPortalOutletComponent, ACPortalComponent],
  exports: [ACPortalOutletComponent, ACPortalComponent]
})
export class AngularContentPortalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularContentPortalModule,
      providers: [ACPortalService]
    };
  }
}
