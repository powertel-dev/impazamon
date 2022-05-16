import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssignTechnicianComponent } from 'src/app/modules/faults/assign-technician/assign-technician.component';

@Component({
  selector: 'app-assigned-fault',
  templateUrl: './assigned-fault.component.html',
  styleUrls: ['./assigned-fault.component.css']
})
export class AssignedFaultComponent implements OnInit {
  fault : any;
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

  assignModal() {
    const modalRef = this.modalService.open(AssignTechnicianComponent,{ scrollable: true });
    modalRef.componentInstance.faultSelected = this.fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
    })
  }

}
