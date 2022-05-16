import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFaultComponent } from './assessment-fault.component';

describe('AssessmentFaultComponent', () => {
  let component: AssessmentFaultComponent;
  let fixture: ComponentFixture<AssessmentFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
