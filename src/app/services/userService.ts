import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/userProfile`);
  }

  decryptPassword(password: string): string {
    let decryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
      decryptedPassword += String.fromCharCode(password.charCodeAt(i) - 1);
    }
    return decryptedPassword;
  }
  
}
