import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkFaultComponent } from './park-fault.component';

describe('ParkFaultComponent', () => {
  let component: ParkFaultComponent;
  let fixture: ComponentFixture<ParkFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
