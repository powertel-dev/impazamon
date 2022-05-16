import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFaultsComponent } from './department-faults.component';

describe('DepartmentFaultsComponent', () => {
  let component: DepartmentFaultsComponent;
  let fixture: ComponentFixture<DepartmentFaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentFaultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
