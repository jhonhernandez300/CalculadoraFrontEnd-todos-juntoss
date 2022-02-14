import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { InsertRelativeComponent } from './insert-relative/insert-relative.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'insertUser', component: InsertUserComponent },  
  { path: 'getUsers', component: GetUsersComponent },
  { path: 'users/:id', component: DeleteUserComponent },
  { path: 'users/:id', component: UpdateUserComponent },
  { path: 'users/:id', component: InsertRelativeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
