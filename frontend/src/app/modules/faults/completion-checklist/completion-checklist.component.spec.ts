import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionChecklistComponent } from './completion-checklist.component';

describe('CompletionChecklistComponent', () => {
  let component: CompletionChecklistComponent;
  let fixture: ComponentFixture<CompletionChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
