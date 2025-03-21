import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-delete-user',
  standalone: false,
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent implements OnInit {
  id: number;

  constructor(private app: AppComponent, private route: ActivatedRoute, public router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {}

  onDelete() {
    this.app.deleteUser(this.id);
    this.router.navigate(['/users']);
  }
}