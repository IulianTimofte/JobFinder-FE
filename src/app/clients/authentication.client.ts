import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<string> {
    console.log("email is " + email);
    console.log("password is "+ password);
    return this.http.post(
      environment.apiUrl + '/authenticate',
      {
        userName: email,
        userPassword: password,
      },
      { responseType: 'text' }
    );
  }

  public register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/register',
      {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}