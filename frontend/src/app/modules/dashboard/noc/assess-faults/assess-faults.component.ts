import { Component, OnInit } from '@angular/core';
import { Faults } from 'src/app/models/faults';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-assess-faults',
  templateUrl: './assess-faults.component.html',
  styleUrls: ['./assess-faults.component.css']
})
export class AssessFaultsComponent implements OnInit {

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
