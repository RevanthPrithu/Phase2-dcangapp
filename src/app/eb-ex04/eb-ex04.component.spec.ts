import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbEx04Component } from './eb-ex04.component';

describe('EbEx04Component', () => {
  let component: EbEx04Component;
  let fixture: ComponentFixture<EbEx04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbEx04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbEx04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
