import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';
import { DataService } from 'src/app/services/data.service';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-edit-fault',
  templateUrl: './edit-fault.component.html',
  styleUrls: ['./edit-fault.component.css']
})
export class EditFaultComponent implements OnInit {

  @Input() src: any;
  
  editForm! : FormGroup;
  selectedFault! : Faults;
  isLoading!: boolean;
  cities: Array<any> = []; 
  suburbs: Array<any> = []; 
  pops: Array<any> = []; 
  selectedCity: String =" --Choose City--";


  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,private route: ActivatedRoute, private api: FaultsService, private router: Router, private data: DataService) {}
  
  ngOnInit() {  
    this.setForm();
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading =true;
    this.api.updateFault(this.editForm.value).subscribe(res => {
      this.isLoading = false;
      this.activeModal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
  
  get editFormData() { return this.editForm.controls; }

  setForm(){
    console.log(this.selectedFault);

    this.editForm = this.formBuilder.group(
      {
        id:[this.selectedFault.id],
        customerName: [this.selectedFault.customerName],
        contactName:[this.selectedFault.contactName],
        phone: [this.selectedFault.phoneNumber],
        email: [this.selectedFault.contactEmail],
        address: [this.selectedFault.address],
        accManager: [this.selectedFault.accountManager],
        serviceType: [this.selectedFault.serviceType],
        city:[this.selectedFault.city],
        suburb:[this.selectedFault.suburb],
        pop: [this.selectedFault.pop],
        linkName: [this.selectedFault.linkName],
        suspectedRfo:[this.selectedFault.suspectedRfo],
        serviceAttr:[this.selectedFault.serviceAttribute],
        remarks:[this.selectedFault.remarks],
        status:[this.selectedFault.status]
      }
    )
    this.showAll();
  }

  showAll(){
    this.data.getAll('cities').subscribe((data: any)=>{
      this.cities = data;
      console.log(this.cities)
    })
  } 

  changeCity(city:any){
    this.data.getAll('cities').subscribe((res:any)=>{
      this.suburbs = res.find((res:any)=> res.city == city.target.value).suburbs;
      console.log(this.suburbs)
    })
  }

  changeSuburb(suburb:any){
    this.data.getAll('cities').subscribe((res:any)=>{
      this.pops = res.find((res:any)=> res.city == this.selectedCity).suburbs.find((result:any) => 
      result.suburb == suburb.target.value).pops;
      console.log(this.pops)
    })
  }

}
