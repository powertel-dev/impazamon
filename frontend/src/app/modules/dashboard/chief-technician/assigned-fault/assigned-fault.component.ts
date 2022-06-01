import { Component, OnInit } from '@angular/core';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-assigned-fault',
  templateUrl: './assigned-fault.component.html',
  styleUrls: ['./assigned-fault.component.css']
})
export class AssignedFaultComponent implements OnInit {

  constructor(public rs:FaultsService) { }

  dtOptions: DataTables.Settings = {};
  showContent!: boolean;
  faults: any =[];
  
  ngOnInit() {
    this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
          lengthMenu : [5, 10, 25,50, 75, 100],
          processing: true
      };
      setTimeout(()=>this.showContent=true, 10);
  }


}
