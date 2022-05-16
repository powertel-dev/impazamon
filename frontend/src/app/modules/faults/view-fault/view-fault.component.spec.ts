import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFaultComponent } from './view-fault.component';

describe('ViewFaultComponent', () => {
  let component: ViewFaultComponent;
  let fixture: ComponentFixture<ViewFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
