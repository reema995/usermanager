import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { User } from '../../user.model';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{
  user: User = { id: 0, name: '', email: '', password: '', registrationDate: '', profileImage: '', status: 'Inactive' };
  previewImage: string | null = null; 
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private app: AppComponent, private router: Router) {}

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.user.profileImage = this.previewImage; 
      };
      reader.readAsDataURL(file);
    }
  }

  onRegister() {
    const emailExists = this.app.users.some(u => u.email === this.user.email);
    if (emailExists) {
      this.errorMessage = 'Email already registered!';
      setTimeout(() => this.errorMessage = null, 3000);
    } else if (!this.user.profileImage) {
      this.errorMessage = 'Please upload a profile image!';
      setTimeout(() => this.errorMessage = null, 3000);
    } else {
      this.app.addUser({ ...this.user });
      this.successMessage = 'Registration successful! Please login to activate your account.';
      setTimeout(() => this.router.navigate(['/users/login']), 2000);
    }
  }
}