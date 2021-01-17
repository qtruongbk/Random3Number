import { TestBed } from '@angular/core/testing';

import { RandomNum3Service } from './random-num3.service';

describe('RandomNum3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomNum3Service = TestBed.get(RandomNum3Service);
    expect(service).toBeTruthy();
  });
});
