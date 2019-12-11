import { TestBed } from '@angular/core/testing';

import { ShoopingCartService } from './shooping-cart.service';

describe('ShoopingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoopingCartService = TestBed.get(ShoopingCartService);
    expect(service).toBeTruthy();
  });
});
