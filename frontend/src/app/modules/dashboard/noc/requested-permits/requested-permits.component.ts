import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-permits',
  templateUrl: './requested-permits.component.html',
  styleUrls: ['./requested-permits.component.css']
})
export class RequestedPermitsComponent implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};
  showContent!: boolean;
  faults: any =[];
  
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
