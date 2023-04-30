import { Component } from '@angular/core';
import { UserService } from '../services/userService';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent {
  user: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    cv: null
  };

  plainPassword: string = '';

 
  showPassword = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.user.password = this.userService.decryptPassword(this.user.password);
    }
  }
  
  

  getFileName(): string {
    if (this.user.cv && this.user.cv.name) {
      return this.user.cv.name;
    } else {
      return 'No file selected';
    }
  }

  removeFile() {
    this.user.cv = null;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file.type === 'application/pdf') {
      this.user.cv = file;
    } else {
      alert('Please select a PDF file');
    }
  }
}
