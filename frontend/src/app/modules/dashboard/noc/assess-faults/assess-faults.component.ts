import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';
import { AssessmentFaultComponent } from 'src/app/modules/faults/assessment-fault/assessment-fault.component';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-assess-faults',
  templateUrl: './assess-faults.component.html',
  styleUrls: ['./assess-faults.component.css']
})
export class AssessFaultsComponent implements OnInit {

  constructor(public rs:FaultsService,public modalService: NgbModal) { }

  dtOptions: DataTables.Settings = {};
  faults: any =[];

  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
      lengthMenu : [5, 10, 25,50, 75, 100],
        processing: true
      };

      this.getAllFaults();
  }

  getAllFaults(){
    this.rs.getFaults('getfaults')
    .subscribe(res =>{
      this.faults = res;
    })
  }

  assessmentModal() {
    const modalRef = this.modalService.open(AssessmentFaultComponent,{ size: 'xl', scrollable: true });
    modalRef.componentInstance.selectedFault = this.faults;
    modalRef.result.then((yes) => {
      console.log("Yes  click")
      this.getAllFaults();
    })
  }

}
