import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    LoginComponent,
    UserListComponent,
    EditUserComponent,
    UserDetailsComponent,
    DeleteUserComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
