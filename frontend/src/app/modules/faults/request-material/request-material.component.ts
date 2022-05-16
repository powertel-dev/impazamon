import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Material, MaterialGroup } from 'src/app/models/materials';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-request-material',
  templateUrl: './request-material.component.html',
  styleUrls: ['./request-material.component.css']
})
export class RequestMaterialComponent implements OnInit {

  items: Array<any> = [];
  newItem: any = {};

  materials: Material = new Material();
  materialGroups: MaterialGroup[] = [];
  
  constructor(public activeModal: NgbActiveModal, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.showCustomers())
  }

  
  addItems() {
    this.items.push(this.newItem);
    console.log(this.items);
    this.newItem = {};
  }

  removeItem(index: number) {
    this.items.splice(index, 1); // remove 1 item at ith place
  }

  

  showCustomers(){
    this.dataService.getAll('materials').subscribe((data: any)=>{
      this.materialGroups = data;
      console.log(this.materialGroups)
    })
  }

}
