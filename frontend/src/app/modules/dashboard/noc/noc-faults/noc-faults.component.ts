import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClearFaultComponent } from 'src/app/modules/faults/clear-fault/clear-fault.component';
import { ReferFaultComponent } from 'src/app/modules/faults/refer-fault/refer-fault.component';
 

@Component({
  selector: 'app-noc-faults',
  templateUrl: './noc-faults.component.html',
  styleUrls: ['./noc-faults.component.css']
})
export class NocFaultsComponent implements OnInit {
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
