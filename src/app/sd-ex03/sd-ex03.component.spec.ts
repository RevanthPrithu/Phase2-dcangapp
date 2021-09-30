import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdEx03Component } from './sd-ex03.component';

describe('SdEx03Component', () => {
  let component: SdEx03Component;
  let fixture: ComponentFixture<SdEx03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdEx03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdEx03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
