import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{ path: '', component: UserListComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'delete/:id', component: DeleteUserComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
