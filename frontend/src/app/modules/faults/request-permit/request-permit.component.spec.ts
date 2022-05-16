import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPermitComponent } from './request-permit.component';

describe('RequestPermitComponent', () => {
  let component: RequestPermitComponent;
  let fixture: ComponentFixture<RequestPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
