import { TestBed } from '@angular/core/testing';

import { ExternalRouteGuard } from './external-route.guard';

describe('ExternalRouteGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalRouteGuard = TestBed.get(ExternalRouteGuard);
    expect(service).toBeTruthy();
  });
});
