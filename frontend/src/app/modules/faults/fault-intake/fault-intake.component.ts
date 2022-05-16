import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Faults } from 'src/app/models/faults';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-fault-intake',
  templateUrl: './fault-intake.component.html',
  styleUrls: ['./fault-intake.component.css']
})
export class FaultIntakeComponent implements OnInit {



  showModal = false;

  faultForm! : FormGroup;
  fault=new Faults();
  faultObj: Faults = new Faults();
  isLoading! : boolean;

  cities:  any = [];
  suburbs:  any = [];
  pops:  any = [];
  selectedCity: String =" --Choose City--";

  customers:  Array<any> = [];
  links:  Array<any> = [];
  selectedCustomer: any;
  submitted=true;


  constructor( private formBuilder: FormBuilder,private route: ActivatedRoute,private apiService: AuthService, private api: FaultsService, private router: Router,private data : DataService) {}
  
  ngOnInit() {  
    this.faultForm = this.formBuilder.group(
      {
        customerName: [' ',Validators.required],
        contactName:[' ',Validators.required],
        phoneNumber: [' ',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
        contactEmail: [' ',Validators.required],
        address: [' ',Validators.required],
        accountManager: [' ',Validators.required],
        serviceType: [' ',Validators.required],
        city:[' ',Validators.required],
        suburb:[' ',Validators.required],
        pop: [' ',Validators.required],
        linkName: [' ',Validators.required],
        suspectedRfo:[' ',Validators.required],
        serviceAttribute:[' ',Validators.required],
        remarks:[' ',Validators.required],
        status:['',Validators.required],
    }
  ),
  //console.log(this.showCities());
  //console.log(this.showCustomers());
  console.log(this.getCity());
  console.log(this.getCustomer())

  this.showModal = true;

}

onSub(){

  this.api.post(this.faultForm).subscribe(
    data => this.handleResponse(data),

  );
}

handleResponse(data:any){

  this.apiService.handle(data.access_token);
  this.router.navigate(['/faults']);

}


onSubmit() {
  this.submitted = true;
  if (this.faultForm.invalid) {
    return;
  }
  alert('Fault intake successful');
  this.onAddFault();
}

  onAddFault(){

    this.submitted = true;
  
    if (this.faultForm.invalid){
    this.faultObj.customerName = this.faultForm.value.customerName;
    this.faultObj.contactName = this.faultForm.value.contactName;
    this.faultObj.phoneNumber = this.faultForm.value.phoneNumber;
    this.faultObj.contactEmail = this.faultForm.value.contactEmail;
    this.faultObj.address = this.faultForm.value.address;
    this.faultObj.accountManager = this.faultForm.value.accountManager;
    this.faultObj.serviceType= this.faultForm.value.serviceType;
    this.faultObj.city = this.faultForm.value.city;
    this.faultObj.suburb = this.faultForm.value.suburb;
    this.faultObj.pop = this.faultForm.value.pop;
    this.faultObj.linkName = this.faultForm.value.linkName;
    this.faultObj.suspectedRfo = this.faultForm.value.suspectedRfo;
    this.faultObj.serviceAttribute = this.faultForm.value.serviceAttribute;
    this.faultObj.remarks = this.faultForm.value.remarks;
    this.faultObj.status = this.faultForm.value.status;
    }

    this.isLoading = true;
    this.api.postFaults('create', this.faultForm.value).subscribe(
      (res) => {
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['./user/faults']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.faultForm.controls;
  }

  /////////////////////////WORKING WITH JSON SERVER API//////////////////////////////////////////////
  showCities(){
    this.data.getAll('city').subscribe((data: any)=>{
      this.cities = data;
      console.log(this.cities)
    })
  } 

  changeCity(){
    this.data.getAll('city').subscribe((res:any)=>{
      this.cities = res;
    })
  }


  changeSuburb(suburb:any){
    this.data.getAll('city').subscribe((res:any)=>{
      this.pops = res.find((res:any)=> res.city == this).suburbs.find((result:any) => 
      result.suburb == suburb.target.value).pops;
      console.log(this.pops)
    })
  }

  showCustomers(){
    this.data.getAll('customers').subscribe((data: any)=>{
      this.customers = data;
      console.log(this.customers)
    })
  }

  changeCustomer(customer:any){
    this.data.getAll('customers').subscribe((res: any)=>{
      this.links = res.find((res:any)=> res.customerName == customer.target.value).links;
      console.log(this.links)
    }
    )
  }
/////////////////////////////////////////// WORKING WITH LARAVEL API////////////////////////////////////////////////////////////////////////////////////////////////
  getCity() {
    this.data.getCity().subscribe(res=>{
           this.cities = res;
           console.log(res)
    })
  }

  getSuburb(event:any){
    var obj = {
      city_id: event.target.value
}
this.data.getSuburb(obj).subscribe(res=>{
          this.suburbs = res;
          console.log(res)
});
}

getPop(event: any){
    var obj = {
      suburb_id: event.target.value
  }
this.data.getPop(obj).subscribe(res=>{
          this.pops = res;
          console.log(res)
});
}

getCustomer(){
  this.data.getAll('customer').subscribe((res : any) =>{
    this.customers = res;
    console.log(res)
  })
}

getLink(event: any){

  var obj = {
    customer_id: event.target.value
}

  this.data.postAll('link',obj).subscribe((res:any)=>{
    this.links = res;
    console.log(res)
  })
}

}
