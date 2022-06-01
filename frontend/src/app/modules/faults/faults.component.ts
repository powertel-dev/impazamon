import { Component, OnInit } from '@angular/core';
import { Faults } from 'src/app/models/faults';
import { FaultsService } from 'src/app/services/faults.service';



@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css']
})
export class FaultsComponent implements OnInit {

  totalLength: any;
  page: any;
  faults: any =[];
  filterfaults: any;

  link : any;
  searchfilter: any ='';

  constructor(public rs:FaultsService) { }

  ngOnInit(): void {

    this.getAllFaults();
      
    this.rs.getFaults('getfaults').subscribe((response) =>{
      this.faults =response;
      this.totalLength= response.length;
      this.filterfaults = response;

      console.log(this.faults);
    })
  }

  getAllFaults(){
    this.rs.getFaults('getfaults')
    .subscribe(res =>{
      this.faults = res;
      this.totalLength= res.length;
      this.filterfaults = res;
    })
  }

  filter(status: string){
    this.filterfaults = this.faults
    .filter((f:any) =>{
      this.totalLength= f.length;
      if(f.status ==status || status == ''){
        return f;
      }
    })
  }

}
