import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';
import { FaultsService } from 'src/app/services/faults.service';
import { AssessmentChecklistComponent } from './assessment-checklist/assessment-checklist.component';
import { AssessmentFaultComponent } from './assessment-fault/assessment-fault.component';
import { AssignTechnicianComponent } from './assign-technician/assign-technician.component';
import { CompletionChecklistComponent } from './completion-checklist/completion-checklist.component';
import { ParkFaultComponent } from './park-fault/park-fault.component';
import { RequestMaterialComponent } from './request-material/request-material.component';
import { RequestPermitComponent } from './request-permit/request-permit.component';
import { ViewFaultComponent } from './view-fault/view-fault.component';


@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css']
})
export class FaultsComponent implements OnInit {

  totalLength: any;
  page: any;
  faults: any =[];
  filterfaults: any;

  link : any;
  searchfilter: any ='';

  constructor(public rs:FaultsService, public modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAllFaults();
      
    this.rs.getFaults('getfaults').subscribe((response) =>{
      this.faults =response;
      this.totalLength= response.length;
      this.filterfaults = response;

      console.log(this.faults);
    })
  }

  getAllFaults(){
    this.rs.getFaults('getfaults')
    .subscribe(res =>{
      this.faults = res;
      this.totalLength= res.length;
      this.filterfaults = res;
    })
  }

  filter(status: string){
    this.filterfaults = this.faults
    .filter((f:any) =>{
      this.totalLength= f.length;
      if(f.status ==status || status == ''){
        return f;
      }
    })
  }


  assessmentModal(faults: Faults) {
    const modalRef = this.modalService.open(AssessmentFaultComponent,{ size: 'xl', scrollable: true });
    modalRef.componentInstance.selectedFault = faults;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  requestPermitModal(faults: Faults) {
    const modalRef = this.modalService.open(RequestPermitComponent,{  scrollable: true });
    modalRef.componentInstance.selectedFault = faults;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  assignTechModal(fault:Faults) {
    const modalRef = this.modalService.open(AssignTechnicianComponent,{ scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  requestMaterialModal(fault:Faults) {
    const modalRef = this.modalService.open(RequestMaterialComponent,{size: 'xl', scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  assessmentChecklist(fault:Faults) {
    const modalRef = this.modalService.open(AssessmentChecklistComponent,{ scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  completeChecklist(fault:Faults) {
    const modalRef = this.modalService.open(CompletionChecklistComponent,{ scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  parkModal(fault:Faults) {
    const modalRef = this.modalService.open(ParkFaultComponent,{scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

  viewModal(fault:Faults) {
    const modalRef = this.modalService.open(ViewFaultComponent,{ size: 'xl', scrollable: true });
    modalRef.componentInstance.faultSelected = fault;

    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

}
