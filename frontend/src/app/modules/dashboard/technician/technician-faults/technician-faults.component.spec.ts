import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianFaultsComponent } from './technician-faults.component';

describe('TechnicianFaultsComponent', () => {
  let component: TechnicianFaultsComponent;
  let fixture: ComponentFixture<TechnicianFaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianFaultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
