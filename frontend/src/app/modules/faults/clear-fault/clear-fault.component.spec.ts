import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFaultComponent } from './clear-fault.component';

describe('ClearFaultComponent', () => {
  let component: ClearFaultComponent;
  let fixture: ComponentFixture<ClearFaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearFaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
