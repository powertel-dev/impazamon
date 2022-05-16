import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-park-fault',
  templateUrl: './park-fault.component.html',
  styleUrls: ['./park-fault.component.css']
})
export class ParkFaultComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
