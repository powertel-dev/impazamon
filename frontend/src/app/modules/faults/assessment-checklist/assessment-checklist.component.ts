import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assessment-checklist',
  templateUrl: './assessment-checklist.component.html',
  styleUrls: ['./assessment-checklist.component.css']
})
export class AssessmentChecklistComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
