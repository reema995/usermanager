import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private app: AppComponent, private router: Router) {}

  onLogin() {
    if (this.app.login(this.email, this.password)) {
      Swal.fire({
        title: 'Logging In...',
        html: `<div style="width: 0%; background: #8B5CF6; height: 5px; border-radius: 5px;" id="progressBar"></div>`,
        icon: 'info',
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        backdrop: 'rgba(0,0,0,0.5)',
        customClass: { popup: 'animated-alert' },
        didOpen: () => {
          const progressBar = document.getElementById('progressBar') as HTMLElement;
          progressBar.style.transition = 'width 2s ease';
          progressBar.style.width = '100%';
        }
      }).then(() => {
        Swal.fire({
          title: 'Welcome!',
          text: `Hello, ${this.app.currentUser?.name}! You have logged in successfully.`,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          backdrop: 'rgba(0,0,0,0.5)',
          customClass: { popup: 'animated-alert' }
        }).then(() => this.router.navigate(['/users']));
      });
    } else {
      this.errorMessage = 'Invalid email or password!';
      setTimeout(() => this.errorMessage = null, 3000);
    }
  }
}