import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';
import { ClearFaultComponent } from 'src/app/modules/faults/clear-fault/clear-fault.component';
import { ParkFaultComponent } from 'src/app/modules/faults/park-fault/park-fault.component';
import { ReferFaultComponent } from 'src/app/modules/faults/refer-fault/refer-fault.component';
import { RequestMaterialComponent } from 'src/app/modules/faults/request-material/request-material.component';
import { RequestPermitComponent } from 'src/app/modules/faults/request-permit/request-permit.component';


@Component({
  selector: 'app-technician-faults',
  templateUrl: './technician-faults.component.html',
  styleUrls: ['./technician-faults.component.css']
})
export class TechnicianFaultsComponent implements OnInit {
  faults: any;

  constructor(public modalService: NgbModal) { }

  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
      lengthMenu : [5, 10, 25,50, 75, 100],
        processing: true
      };
  }

  requestPermitModal(faults: Faults) {
    const modalRef = this.modalService.open(RequestPermitComponent,{  scrollable: true });
    modalRef.componentInstance.selectedFault = faults;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
    })
  }
  requestMaterialModal(fault:Faults) {
    const modalRef = this.modalService.open(RequestMaterialComponent,{size: 'xl', scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
    })
  }

  parkModal(fault:Faults) {
    const modalRef = this.modalService.open(ParkFaultComponent,{scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
    })
  }
  
  referModal() {
    const modalRef = this.modalService.open(ReferFaultComponent,{  scrollable: true });
    modalRef.componentInstance.faultObj = this.faults;

    modalRef.result.then((yes) => {
      console.log("Yes  click")

    })
  }

  clearModal(){
    const modalRef = this.modalService.open(ClearFaultComponent,{  scrollable: true });
    modalRef.componentInstance.faultObj = this.faults;

    modalRef.result.then((yes) => {
      console.log("Yes  click")

    })
  }

}
