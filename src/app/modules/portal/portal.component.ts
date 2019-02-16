import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
  Input,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ACPortalService } from './portal.service';

@Component({
  selector: 'ac-portal',
  template: `
    <ng-template #portal>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class ACPortalComponent implements OnDestroy, AfterViewInit {
  @Input() name: string = null;

  @ViewChild('portal') portal: TemplateRef<any>;

  constructor(
    public portalService: ACPortalService,
    private cd: ChangeDetectorRef
  ) {
    portalService.resetPortal(this.name);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.portalService.setPortal(
        new TemplatePortal(this.portal, undefined, {}),
        this.name
      );
    });
  }

  ngOnDestroy() {
    this.portalService.clearPortal(this.name);
  }
}
