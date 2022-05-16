import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultIntakeComponent } from './fault-intake.component';

describe('FaultIntakeComponent', () => {
  let component: FaultIntakeComponent;
  let fixture: ComponentFixture<FaultIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultIntakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
