import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { User } from '../../user.model';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent{
  user: User = { id: 0, name: '', email: '', password: '', registrationDate: '', profileImage: '', status: 'Inactive' };
  previewImage: string | null = null;
  successMessage: string | null = null;

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

  onSubmit() {
    if (!this.user.profileImage) {
      alert('Please upload a profile image!');
      return;
    }
    this.app.addUser({ ...this.user });
    this.successMessage = 'User added successfully! Login to activate.';
    setTimeout(() => this.router.navigate(['/users']), 2000);
  }
}