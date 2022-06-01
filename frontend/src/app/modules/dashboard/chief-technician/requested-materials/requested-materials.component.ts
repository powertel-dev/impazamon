import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-materials',
  templateUrl: './requested-materials.component.html',
  styleUrls: ['./requested-materials.component.css']
})
export class RequestedMaterialsComponent implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};
  faults: any =[];
  showContent!: boolean;
  
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
