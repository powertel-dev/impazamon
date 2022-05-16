import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Faults } from 'src/app/models/faults';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-assessment-fault',
  templateUrl: './assessment-fault.component.html',
  styleUrls: ['./assessment-fault.component.css']
})
export class AssessmentFaultComponent implements OnInit {

  assessForm! : FormGroup;
  selectedFault! : Faults;
  isLoading!: boolean;


  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private api: FaultsService) { }

  ngOnInit(): void {
    this.setForm();
  }

  onSubmit() {
    if (this.assessForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading =true;
    this.api.updateFault(this.assessForm.value).subscribe((res: any) => {
      this.isLoading = false;
      this.activeModal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }

  get editFormData() { return this.assessForm.controls; }

  setForm(){
    console.log(this.selectedFault);

    this.assessForm = this.formBuilder.group(
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
  }

}
