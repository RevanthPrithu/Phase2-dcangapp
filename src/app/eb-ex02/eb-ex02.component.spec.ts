import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbEx02Component } from './eb-ex02.component';

describe('EbEx02Component', () => {
  let component: EbEx02Component;
  let fixture: ComponentFixture<EbEx02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbEx02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbEx02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
