import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbEx01Component } from './eb-ex01.component';

describe('EbEx01Component', () => {
  let component: EbEx01Component;
  let fixture: ComponentFixture<EbEx01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbEx01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbEx01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
