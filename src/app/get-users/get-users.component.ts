import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { UserService } from '../data/user-service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  user: User = {
    id: 0,
    dateOfBirth: new Date(),
    userNames: '',
    userLastNames: '', 
    userPlatformName: '',
    userPassword: '',
    userGender: '',
    userDocumentNumber: 0
  };

  items!: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetAllUsers().then((response) => {
      console.log('response', response);
      this.items = response.data;
    })
    .catch((error) => {
      console.error(': ', error);
    })     
   
  }

}
