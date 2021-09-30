import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbEx03Component } from './eb-ex03.component';

describe('EbEx03Component', () => {
  let component: EbEx03Component;
  let fixture: ComponentFixture<EbEx03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbEx03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbEx03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
