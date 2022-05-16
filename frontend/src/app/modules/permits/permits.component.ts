import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.css']
})
export class PermitsComponent implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
      lengthMenu : [5, 10,15, 25,50, 75, 100],
        processing: true
      };
  }

}
