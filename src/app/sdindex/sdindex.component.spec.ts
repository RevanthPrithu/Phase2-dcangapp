import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdindexComponent } from './sdindex.component';

describe('SdindexComponent', () => {
  let component: SdindexComponent;
  let fixture: ComponentFixture<SdindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
