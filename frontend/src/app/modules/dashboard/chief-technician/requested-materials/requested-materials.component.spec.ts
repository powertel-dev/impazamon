import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedMaterialsComponent } from './requested-materials.component';

describe('RequestedMaterialsComponent', () => {
  let component: RequestedMaterialsComponent;
  let fixture: ComponentFixture<RequestedMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
