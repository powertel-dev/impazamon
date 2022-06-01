import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common"
import { Faults } from 'src/app/models/faults';
import { FaultsService } from 'src/app/services/faults.service';

@Component({
  selector: 'app-edit-fault',
  templateUrl: './edit-fault.component.html',
  styleUrls: ['./edit-fault.component.css']
})
export class EditFaultComponent implements OnInit {

  /***************this is for routing */
  showModal = false;

  faultId:any;
  data:any;
  fault = new Faults();
  
  constructor( private route: ActivatedRoute, private api: FaultsService, private router: Router,private location: Location) {}
  
  ngOnInit() {  
    ///For calling routing modal
    this.showModal = true;

    this.faultId = this.route.snapshot.params['faultId'];
    console.log(this.faultId);
    this.getData();

  }

  //////////for closing routing modal
  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    this.location.back();
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  
  }
          //////End routing modal
  
  getData(){
    this.api.getFaultById(`fault`,this.faultId).subscribe((res: any)=>{
      this.data=res;
      this.fault=this.data;
      console.log(this.fault);
    })
  }

  updateFault(){
    this.api.updateFault(`fault`,this.faultId,this.fault).subscribe(res=>{
      this.onClose();
    })
  }

}
