import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaultsService } from 'src/app/services/faults.service';
import { Location } from "@angular/common"

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {

  showModal = false;

  constructor(private route: ActivatedRoute, private api: FaultsService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.showModal = true;
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

}
