import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFaultComponent } from './refer-fault.component';

describe('ReferFaultComponent', () => {
  let component: ReferFaultComponent;
  let fixture: ComponentFixture<ReferFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
