import { TestBed } from '@angular/core/testing';

import { PlanResolver } from './plan.resolver';

describe('PlanResolver', () => {
  let resolver: PlanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PlanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
