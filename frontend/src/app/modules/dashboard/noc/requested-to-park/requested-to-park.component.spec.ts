import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedToParkComponent } from './requested-to-park.component';

describe('RequestedToParkComponent', () => {
  let component: RequestedToParkComponent;
  let fixture: ComponentFixture<RequestedToParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedToParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedToParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
