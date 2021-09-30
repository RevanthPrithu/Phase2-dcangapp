import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbEx02Component } from './pb-ex02.component';

describe('PbEx02Component', () => {
  let component: PbEx02Component;
  let fixture: ComponentFixture<PbEx02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbEx02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbEx02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
