import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/authusers";

  getUsersList(){
    return this.http.get(this.url);
  }
  getUser()
  {
    return this.http.get(this.url)
  }

  saveUser(data:any)
  {
    return this.http.post(this.url,data);
  }
  
}
