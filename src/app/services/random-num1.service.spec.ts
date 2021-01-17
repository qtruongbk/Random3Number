import { TestBed } from '@angular/core/testing';

import { RandomNum1Service } from './random-num1.service';

describe('RandomNum1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNum1Service = TestBed.get(RandomNum1Service);
    expect(service).toBeTruthy();
  });
});
