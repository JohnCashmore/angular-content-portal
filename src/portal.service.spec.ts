import { TestBed } from '@angular/core/testing';
import { TemplatePortal } from '@angular/cdk/portal';

import { ACPortalService } from './portal.service';

describe('CDS Portal Service', () => {
    let portalService: ACPortalService;
    const portalName = 'test';

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                ACPortalService
            ]
        });
        portalService = TestBed.get(ACPortalService);
    });

    it('should set portal', () => {
        expect(portalService.portals[portalName]).toBeUndefined();
        expect(portalService.portalsData[portalName]).toBeUndefined();
        const portal = new TemplatePortal(null, undefined, {});
        portalService.setPortal(portal, portalName);
        portalService.registerPortal(portalName);
        expect(portalService.portals[portalName]).not.toBeUndefined();
        expect(portalService.portalsData[portalName]).toBe(portal);
    });

    it('should register portal', () => {
        expect(portalService.portals[portalName]).toBeUndefined();
        portalService.registerPortal(portalName);
        expect(portalService.portals[portalName]).not.toBeUndefined();
    });

    it('should clear portal', () => {
        expect(portalService.portals[portalName]).toBeUndefined();
        portalService.registerPortal(portalName);
        expect(portalService.portals[portalName]).not.toBeUndefined();
        portalService.clearPortal(portalName);
        expect(portalService.portalsData[portalName]).toBe(null);
    });

});
