import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbEx01Component } from './pb-ex01.component';

describe('PbEx01Component', () => {
  let component: PbEx01Component;
  let fixture: ComponentFixture<PbEx01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbEx01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbEx01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
