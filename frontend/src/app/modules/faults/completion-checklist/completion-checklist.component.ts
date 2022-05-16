import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-completion-checklist',
  templateUrl: './completion-checklist.component.html',
  styleUrls: ['./completion-checklist.component.css']
})
export class CompletionChecklistComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
