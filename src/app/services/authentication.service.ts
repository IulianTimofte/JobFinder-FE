import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';



@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token'; private errorMessage = '';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    
  ) {}

 

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/']);
    });
  }

  public register(firstname: string, lastname: string, email: string, password: string): void {
    this.authenticationClient
      .register(firstname, lastname, email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/']);
      },
      (error) => {                              //Error callback
        console.error(error)
        this.errorMessage = error;
        
  
        //throw error;   //You can also throw the error to a global error handler
  });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  
  public isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  
  public isRegisterPage(): boolean {
    return this.router.url === '/register';
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}