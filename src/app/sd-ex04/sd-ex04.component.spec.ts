import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdEx04Component } from './sd-ex04.component';

describe('SdEx04Component', () => {
  let component: SdEx04Component;
  let fixture: ComponentFixture<SdEx04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdEx04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdEx04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
