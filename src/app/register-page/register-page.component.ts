import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationClient } from '../clients/authentication.client';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup; 
  private tokenKey = 'token'; 
  public errorMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

   

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  public register(firstname: string, lastname: string, email: string, password: string): void {
    this.authenticationClient
      .register(firstname, lastname, email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        this.router.navigateByUrl('/login');
      },
      (error) => {                              //Error callback
        console.error(error)
        this.errorMessage = error.error;
        
  
        //throw error;   //You can also throw the error to a global error handler
  });}
  public onSubmit() {
    this.register(
      this.registerForm.get('firstname')!.value,
      this.registerForm.get('lastname')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm!.get('password')!.value
    );
  }
}