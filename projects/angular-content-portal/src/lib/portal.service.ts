import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Portal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ACPortalService {
  portals: Array<BehaviorSubject<Portal<any>>> = [];
  portalsData: Array<Portal<any>> = [];

  constructor() {}

  portal$(name: string): any {
    return this.portals[name] ? this.portals[name] : null;
  }

  setPortal(portal: Portal<any>, name: string): void {
    this.portalsData[name] = portal;
    if (this.portals[name] == null) {
      return;
    }
    this.portals[name].next(portal);
  }

  clearPortal(name: string, removeData = false): void {
    this.resetPortal(name, removeData);
  }

  registerPortal(name: string) {
    this.resetPortal(name);
    if (typeof this.portalsData[name] !== 'undefined') {
      this.setPortal(this.portalsData[name], name);
    } else {
      this.portalsData[name] = null;
    }
  }

  resetPortal(name: string, removeData = false): void {
    this.portals[name] = new BehaviorSubject(null);
    if (removeData) {
      this.portalsData[name] = null;
    }
  }
}
