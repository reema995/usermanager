import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent{
  filteredUsers: User[] = [];

  constructor(public app: AppComponent) {
    this.filterUsers({ target: { value: 'all' } } as any); 
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/default-user.png';
  }

  filterUsers(event: Event) {
    const filterValue = (event.target as HTMLSelectElement).value;
    if (filterValue === 'all') {
      this.filteredUsers = this.app.users;
    } else if (filterValue === 'active') {
      this.filteredUsers = this.app.users.filter(u => u.status === 'Active');
    } else {
      this.filteredUsers = this.app.users.filter(u => u.status === 'Inactive');
    }
  }

  exportToCSV() {
    const csv = this.app.users.map(user => `${user.id},${user.name},${user.email},${user.registrationDate},${user.status}`).join('\n');
    const csvContent = `data:text/csv;charset=utf-8,ID,Name,Email,Registration Date,Status\n${csv}`;
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}