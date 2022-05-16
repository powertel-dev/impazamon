import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultsStatusComponent } from './faults-status.component';

describe('FaultsStatusComponent', () => {
  let component: FaultsStatusComponent;
  let fixture: ComponentFixture<FaultsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
