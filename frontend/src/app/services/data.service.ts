import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl!: string;

  constructor( private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  getAll(path: string) {
    return this.http.get(`${this.apiUrl}/${path}`);
  }

  postAll(path: string, data: any){
    return this.http.post(`${this.apiUrl}/${path}`, data);
  }


  getCity(){
    return this.http.get('http://127.0.0.1:8000/api/city');
   }

   getSuburb(data: any){
    return this.http.post('http://127.0.0.1:8000/api/suburb',data);
   }

   getPop(data: any){
    return this.http.post('http://127.0.0.1:8000/api/pop',data);
   }

   getCustomer(){
    return this.http.get('http://127.0.0.1:8000/api/customer');
   }

   getLink(data:any){
    return this.http.post('http://127.0.0.1:8000/api/link',data);
   }

}
