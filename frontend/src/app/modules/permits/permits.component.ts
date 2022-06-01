import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.css']
})
export class PermitsComponent implements OnInit {

  constructor() { }

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
      setTimeout(()=>this.showContent=true, 10);
  }

}
