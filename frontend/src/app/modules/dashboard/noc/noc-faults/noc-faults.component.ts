import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClearFaultComponent } from 'src/app/modules/faults/clear-fault/clear-fault.component';
import { ReferFaultComponent } from 'src/app/modules/faults/refer-fault/refer-fault.component';
import { FaultsService } from 'src/app/services/faults.service';
 

@Component({
  selector: 'app-noc-faults',
  templateUrl: './noc-faults.component.html',
  styleUrls: ['./noc-faults.component.css']
})
export class NocFaultsComponent implements OnInit {

  constructor(public modalService: NgbModal,public rs:FaultsService) { }

  dtOptions: DataTables.Settings = {};
  faults: any =[];
  showContent!: boolean;
  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu : [5, 10, 25,50, 75, 100],
        processing: true,
      };
      this.getAllFaults();
  }

    getAllFaults(){
    this.rs.getFaults('getfaults')
    .subscribe(res =>{
      this.faults = res;
      setTimeout(()=>this.showContent=true, 10);
    })
  }  

}
