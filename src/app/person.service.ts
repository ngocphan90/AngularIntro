import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Person} from "./person";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/person/getPerson?id=4`);
  }

  public addNewPerson(person : Person): Observable<Person> {
    return this.http.post(`http://localhost:8080/person/addNewPerson`, person);
  }


}
