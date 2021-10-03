import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Songs } from '../Songs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {

  apiurl: string = 'http://localhost:3000/songs';
  header = new HttpHeaders().set('Content-Type', 'application/json');
  userapi:string="http://localhost:3000/user";

  constructor(private http: HttpClient) { }
  //create
  create(data: any): Observable<any> {
    console.log(data);
    let API_URl = `${this.apiurl}`;
    return this.http.post(API_URl, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  list(): Observable<Songs[]> {
    return this.http.get<Songs[]>(`${this.apiurl}`);
  }

  


  update(id: any, data: any): Observable<any> {
    let API_URl = `${this.apiurl}/${id}`;
    return this.http.put(API_URl, data, { headers: this.header }).pipe(
      catchError(this.handleError)
    )
  }
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiurl}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }


  listUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.userapi}`);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
