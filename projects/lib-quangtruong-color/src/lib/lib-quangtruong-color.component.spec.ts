import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibQuangtruongColorComponent } from './lib-quangtruong-color.component';

describe('LibQuangtruongColorComponent', () => {
  let component: LibQuangtruongColorComponent;
  let fixture: ComponentFixture<LibQuangtruongColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibQuangtruongColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibQuangtruongColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
