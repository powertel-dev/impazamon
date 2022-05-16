import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clear-fault',
  templateUrl: './clear-fault.component.html',
  styleUrls: ['./clear-fault.component.css']
})
export class ClearFaultComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
