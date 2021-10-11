import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headerOption={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UsiService {
  
  url="http://localhost:3000/users"
  rootUrl="http://localhost:3000/"

  constructor(private http : HttpClient) { }

  registerUser(data: any):Observable<any>{
    return this.http.post(this.rootUrl+"users",data)
  }

  loginUser():Observable<any>{
    return this.http.get(this.url);
  }
  
}
