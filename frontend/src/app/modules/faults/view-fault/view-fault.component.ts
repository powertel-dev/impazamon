import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';

@Component({
  selector: 'app-view-fault',
  templateUrl: './view-fault.component.html',
  styleUrls: ['./view-fault.component.css']
})
export class ViewFaultComponent implements OnInit {

  faultSelected! : Faults;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
