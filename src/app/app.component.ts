import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './users/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: User[] = [];
  currentUser: User | null = null;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.loadUsers();
  }

  private loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = [{
        id: 1,
        name: 'Ali',
        email: 'ali@example.com',
        password: '123',
        registrationDate: '2025-03-20 10:00',
        profileImage: '/assets/images/default-user.png',
        status: 'Inactive'
      }];
      this.saveUsers();
    }
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addUser(user: User) {
    user.id = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    const now = new Date();
    user.registrationDate = now.toISOString().slice(0, 16).replace('T', ' ');
    user.profileImage = user.profileImage || '/assets/default-user.png';
    user.status = 'Inactive';
    this.users.push(user);
    this.saveUsers();
  }

  editUser(updatedUser: User) {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.saveUsers();
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
    this.saveUsers();
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      user.status = 'Active';
      this.currentUser = user;
      this.saveUsers();
      this.cdr.detectChanges();
      return true;
    }
    return false;
  }

  logout() {
    if (this.currentUser) {
      const userName = this.currentUser.name;
      this.currentUser.status = 'Inactive';
      this.editUser(this.currentUser); 
      this.currentUser = null;
      this.cdr.detectChanges();
      Swal.fire({
        title: 'Logging Out...',
        html: `<div style="width: 0%; background: #EF4444; height: 5px; border-radius: 5px;" id="progressBar"></div>`,
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
          title: 'Goodbye!',
          text: `${userName}, you have logged out successfully.`,
          icon: 'info',
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          backdrop: 'rgba(0,0,0,0.5)',
          customClass: { popup: 'animated-alert' }
        }).then(() => this.router.navigate(['/users/login']));
      });
    } else {
     
      this.router.navigate(['/users/login']);
    }
  }
  goToHome() {
    this.router.navigate(['/users']); 
}
}