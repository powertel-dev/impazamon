import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFaultComponent } from './assigned-fault.component';

describe('AssignedFaultComponent', () => {
  let component: AssignedFaultComponent;
  let fixture: ComponentFixture<AssignedFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
