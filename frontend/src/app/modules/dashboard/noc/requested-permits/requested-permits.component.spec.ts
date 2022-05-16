import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedPermitsComponent } from './requested-permits.component';

describe('RequestedPermitsComponent', () => {
  let component: RequestedPermitsComponent;
  let fixture: ComponentFixture<RequestedPermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedPermitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
