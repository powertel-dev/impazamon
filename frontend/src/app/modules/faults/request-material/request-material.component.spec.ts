import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMaterialComponent } from './request-material.component';

describe('RequestMaterialComponent', () => {
  let component: RequestMaterialComponent;
  let fixture: ComponentFixture<RequestMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
