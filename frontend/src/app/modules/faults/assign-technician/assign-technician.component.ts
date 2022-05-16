import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assign-technician',
  templateUrl: './assign-technician.component.html',
  styleUrls: ['./assign-technician.component.css']
})
export class AssignTechnicianComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
