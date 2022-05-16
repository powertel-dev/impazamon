import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public apiUrl!: string;

  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser!: Observable<User>;

  constructor(private http: HttpClient,private route: Router) { 
    this.loadUserInfo();
    this.apiUrl = `${environment.apiUrl}`;
  }

  loadUserInfo(){

    const userData = this.userInfo.getValue();
    

    if(this.userInfo){

      const accesstoken = localStorage.getItem('access_token');

      if(accesstoken){
        const decryptedUser = this.jwtHelper.decodeToken(accesstoken);

        const data = {
          access_token: accesstoken,
          
          name: decryptedUser.name,
          email: decryptedUser.email,
          userid: decryptedUser.sub,
          tokenExpiration: decryptedUser.exp,

        };

        this.userInfo.next(data);
      }
    }
  }

  handle(token:any){
    this.setToken(token)
  }

  setToken(access_token: string): void {
    localStorage.setItem('access_token', access_token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(email: string, password: string) {
      return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  this.setToken(user.access_token);
                  localStorage.setItem('access_token', user.access_token);
                  localStorage.setItem('refresh_token', user.refresh_token);
                  const decryptedUser = this.jwtHelper.decodeToken(user.access_token);
                  console.log(decryptedUser);
      
                  const data = {
      
                    access_token: user.access_token,
                    refresh_token: user.refresh_token,
                    name: decryptedUser.name,
                    email: decryptedUser.email,
                    userid: decryptedUser.sub,
                    tokenExpiration: decryptedUser.exp,
        
                  };
                  this.userInfo.next(data);
                  return true;
              }
  
              return false;
          }));
      }

      logout() {
        localStorage.clear();
        window.localStorage.clear();
        this.userInfo.next(null);
      }

      // Access user profile
  userProfile(): Observable<any> {
    return this.http.get('http://localhost:8000/api/user-profile');
  }

}
