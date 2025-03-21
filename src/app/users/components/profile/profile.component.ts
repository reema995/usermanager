import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  defaultImage = '/assets/default-user.png';
  previewImage: string | null = null;

  constructor(public app: AppComponent) {}

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveImage() {
    if (this.previewImage && this.app.currentUser) {
      this.app.currentUser.profileImage = this.previewImage;
      this.app.editUser(this.app.currentUser);
      Swal.fire({
        title: 'Success!',
        text: 'Profile image updated successfully.',
        icon: 'success',
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
        backdrop: 'rgba(0,0,0,0.5)',
        customClass: { popup: 'animated-alert' }
      });
      this.previewImage = null; 
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please select an image first.',
        icon: 'error',
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
        backdrop: 'rgba(0,0,0,0.5)',
        customClass: { popup: 'animated-alert' }
      });
    }
  }
}