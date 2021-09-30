import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdEx01Component } from './sd-ex01.component';

describe('SdEx01Component', () => {
  let component: SdEx01Component;
  let fixture: ComponentFixture<SdEx01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdEx01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdEx01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
