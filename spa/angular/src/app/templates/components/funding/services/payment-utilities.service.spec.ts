import { TestBed } from '@angular/core/testing';

import { PaymentUtilitiesService } from './payment-utilities.service';

describe('PaymentUtilitiesService', () => {
  let service: PaymentUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
