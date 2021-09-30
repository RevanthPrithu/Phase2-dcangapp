import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbindexComponent } from './pbindex.component';

describe('PbindexComponent', () => {
  let component: PbindexComponent;
  let fixture: ComponentFixture<PbindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
