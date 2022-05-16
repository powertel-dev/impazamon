import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefTechnicianComponent } from './chief-technician.component';

describe('ChiefTechnicianComponent', () => {
  let component: ChiefTechnicianComponent;
  let fixture: ComponentFixture<ChiefTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
