import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-parks',
  templateUrl: './requested-parks.component.html',
  styleUrls: ['./requested-parks.component.css']
})
export class RequestedParksComponent implements OnInit {

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
