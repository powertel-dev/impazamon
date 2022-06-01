import { Component, OnInit } from '@angular/core';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-department-faults',
  templateUrl: './department-faults.component.html',
  styleUrls: ['./department-faults.component.css']
})
export class DepartmentFaultsComponent implements OnInit {

  constructor(public rs:FaultsService) { }


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
