import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationClient } from '../clients/authentication.client';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  private tokenKey = 'token'; 
  public errorMessage = '';

  constructor(private authenticationService: AuthenticationService,
    private authenticationClient: AuthenticationClient,
    private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem(this.tokenKey)){
      this.router.navigateByUrl('/');
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  public login(): void {
    this.authenticationClient
      .login(this.loginForm.get('email')!.value, this.loginForm!.get('password')!.value)
      .subscribe((response) => {
        localStorage.setItem(this.tokenKey, JSON.parse(response).jwtToken);
        localStorage.setItem("userId",JSON.parse(response).id );
        this.router.navigateByUrl('/');
      },
      (error) => {                              //Error callback
        console.error(error)
        this.errorMessage = error.error;
        
  
        //throw error;   //You can also throw the error to a global error handler
  });}

  // public onSubmit() {
  //   this.authenticationService.login(
  //     this.loginForm.get('email')!.value,
  //     this.loginForm!.get('password')!.value
  //   );
  // }
}