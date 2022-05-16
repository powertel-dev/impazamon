import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedParksComponent } from './requested-parks.component';

describe('RequestedParksComponent', () => {
  let component: RequestedParksComponent;
  let fixture: ComponentFixture<RequestedParksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedParksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
