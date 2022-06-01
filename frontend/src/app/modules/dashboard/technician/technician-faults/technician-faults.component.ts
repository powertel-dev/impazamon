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
  showContent!: boolean;
  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu : [5, 10, 25,50, 75, 100],
        processing: true,
    };
    setTimeout(()=>this.showContent=true, 10);
  }
 

}
