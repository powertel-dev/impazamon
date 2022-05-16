import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocFaultsComponent } from './noc-faults.component';

describe('NocFaultsComponent', () => {
  let component: NocFaultsComponent;
  let fixture: ComponentFixture<NocFaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocFaultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
