import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { User } from '../../user.model';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  user: User | undefined;

  constructor(private app: AppComponent, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.app.users.find(u => u.id === id);
  }

  onSubmit() {
    if (this.user) {
      this.app.editUser(this.user);
      this.router.navigate(['/users']);
    }
  }
}