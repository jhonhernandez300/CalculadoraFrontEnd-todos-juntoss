import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { InsertUserComponent } from './insert-user/insert-user.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InsertRelativeComponent } from './insert-relative/insert-relative.component';
import { HttpClientModule } from '@angular/common/http';
import { GetUsersComponent } from './get-users/get-users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertUserComponent,
    InsertRelativeComponent,
    GetUsersComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
