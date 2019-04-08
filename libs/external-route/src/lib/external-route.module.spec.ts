import { async, TestBed } from '@angular/core/testing';
import { ExternalRouteModule } from './external-route.module';

describe('ExternalRouteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExternalRouteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExternalRouteModule).toBeDefined();
  });
});
