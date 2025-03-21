import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(
    private app: AppComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.app.users.find(u => u.id === id);
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/default-user.png'; 
  }
}