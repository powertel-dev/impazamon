import { Injectable } from '@angular/core';
import { Faults } from '../models/faults';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FaultsService {


  constructor(private http: HttpClient, private data: DataService, private authService : AuthService) {
   
  }

  url = this.data.apiUrl
  
  getFaults(path: string){
    return this.http.get<Faults[]>(`${this.url}/${path}`);
  }

  postFaults(path: string, data: any){
    return this.http.post<any>(`${this.url}/${path}`, data)
    .pipe(map((res) =>{
      return res;
    })) 
  }

    post(data: any){
      return this.http.post(`${this.url}/create`, data);
    }

    updateFault(selectedFault: Faults){
    return this.http.put(`${this.url}`,selectedFault)
    .pipe(map((res) =>{
      return res;
    }))
  }     
   
}