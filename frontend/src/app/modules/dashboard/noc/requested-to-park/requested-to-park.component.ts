import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-to-park',
  templateUrl: './requested-to-park.component.html',
  styleUrls: ['./requested-to-park.component.css']
})
export class RequestedToParkComponent implements OnInit {

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
