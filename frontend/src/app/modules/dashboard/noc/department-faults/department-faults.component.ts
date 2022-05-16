import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-faults',
  templateUrl: './department-faults.component.html',
  styleUrls: ['./department-faults.component.css']
})
export class DepartmentFaultsComponent implements OnInit {

  constructor() { }


  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
      lengthMenu : [5, 10, 25,50, 75, 100],
        processing: true
      };
  }

}
