import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  users:any = [];
  loading = false;
  submitted = false;
  public error = null;

  constructor(private authService : AuthService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }
  // convenience getter for easy access to form fields
  get f() {return this.loginForm.controls;}

  onSubmit(){
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first()).subscribe(
        data => {
          this.router.navigateByUrl('/user');
        },
        error =>{
          this.handleError(error)
        }
      );
  }

    handleError(error : any){
      this.error = error.error.error;
    }
}
