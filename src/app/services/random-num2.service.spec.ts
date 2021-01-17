import { TestBed } from '@angular/core/testing';

import { RandomNum2Service } from './random-num2.service';

describe('RandomNum2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNum2Service = TestBed.get(RandomNum2Service);
    expect(service).toBeTruthy();
  });
});
