import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessFaultsComponent } from './assess-faults.component';

describe('AssessFaultsComponent', () => {
  let component: AssessFaultsComponent;
  let fixture: ComponentFixture<AssessFaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessFaultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
