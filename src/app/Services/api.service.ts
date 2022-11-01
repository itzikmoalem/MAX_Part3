import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

const SERVER: string = "https://jsonplaceholder.typicode.com/comments";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
      return this.httpClient.get<any>(SERVER);
  }

  public getCommentsByName(name: string): Observable<any> {
    return this.httpClient.get<any>(SERVER + "/?name=" + name);
  }

  public getCommentsByEmail(email: string): Observable<any> {
    return this.httpClient.get<any>(SERVER + "/?email=" + email);
  }
}
