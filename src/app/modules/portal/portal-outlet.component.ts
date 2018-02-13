import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

import { ACPortalService } from './portal.service';

@Component({
  selector: 'ac-portal-outlet',
  template: `<ng-template [cdkPortalHost]="portalService.portal$(name) | async"></ng-template>`
})
export class ACPortalOutletComponent implements OnInit, OnDestroy {
  @Input()
  name: string = null;

  constructor(public portalService: ACPortalService) { }

  ngOnInit() {
    setTimeout(() => {
      this.portalService.registerPortal(this.name);
    });
  }

  ngOnDestroy() {
    this.portalService.clearPortal(this.name, true);
  }
}
