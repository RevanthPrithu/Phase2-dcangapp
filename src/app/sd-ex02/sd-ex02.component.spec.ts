import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdEx02Component } from './sd-ex02.component';

describe('SdEx02Component', () => {
  let component: SdEx02Component;
  let fixture: ComponentFixture<SdEx02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdEx02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdEx02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
