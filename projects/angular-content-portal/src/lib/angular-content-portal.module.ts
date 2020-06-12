import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { ACPortalComponent } from './portal.component';
import { ACPortalOutletComponent } from './portal-outlet.component';


@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [ACPortalOutletComponent, ACPortalComponent],
  exports: [ACPortalOutletComponent, ACPortalComponent]
})
export class AngularContentPortalModule { }
