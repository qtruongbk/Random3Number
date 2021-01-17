import { TestBed } from '@angular/core/testing';

import { LibQuangtruongColorService } from './lib-quangtruong-color.service';

describe('LibQuangtruongColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibQuangtruongColorService = TestBed.get(LibQuangtruongColorService);
    expect(service).toBeTruthy();
  });
});
