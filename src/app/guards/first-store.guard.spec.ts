import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firstStoreGuard } from './first-store.guard';

describe('firstStoreGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firstStoreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
