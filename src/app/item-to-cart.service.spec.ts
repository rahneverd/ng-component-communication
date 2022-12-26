import { TestBed } from '@angular/core/testing';

import { ItemToCartService } from './item-to-cart.service';

describe('ItemToCartService', () => {
  let service: ItemToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
