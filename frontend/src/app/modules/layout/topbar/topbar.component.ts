import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  user!: User;

  constructor(
    private router: Router,
    private authService: AuthService
) {}

  ngOnDestroy(): void {
    this.logout() 
  }

ngOnInit(): void {
  /**  this.authService.profileUser().subscribe(value =>{
    if(value){
      this.user.name = value.name;
      this.UserProfile = value;
    }
  }) */
  this.authService.userProfile().subscribe((data: any) => {
    this.user = data;
  });
}



logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}

}
