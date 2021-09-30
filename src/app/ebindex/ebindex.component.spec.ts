import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbindexComponent } from './ebindex.component';

describe('EbindexComponent', () => {
  let component: EbindexComponent;
  let fixture: ComponentFixture<EbindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
