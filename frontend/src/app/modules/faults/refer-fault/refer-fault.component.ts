import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-refer-fault',
  templateUrl: './refer-fault.component.html',
  styleUrls: ['./refer-fault.component.css']
})
export class ReferFaultComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
