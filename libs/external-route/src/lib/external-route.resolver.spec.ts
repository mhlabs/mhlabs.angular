import { TestBed } from '@angular/core/testing';

import { ExternalRouteResolver } from './external-route.resolver';

describe('ExternalRouteResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalRouteResolver = TestBed.get(ExternalRouteResolver);
    expect(service).toBeTruthy();
  });
});
