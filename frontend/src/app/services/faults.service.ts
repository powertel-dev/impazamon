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

  addFault(path: string,fault:any){
    return this.http.post<any>(`${this.url}/${path}`, fault)
    .pipe(map((res) =>{
      return res;
    })) 
  }

  getFaultById(path:string, id:number){
    return this.http.get(`${this.url}/${path}/`+id)
  }

  updateFault(path:string, id:number,fault:any){
    return this.http.put(`${this.url}/${path}/`+id,fault)
  }

}