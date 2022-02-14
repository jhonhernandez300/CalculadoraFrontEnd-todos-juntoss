import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  SaveUser(user: User): Observable<any> {
    return this.http.post('https://localhost:44373/User/SaveUser', user);
  }

  UpdateUser(userId: Number): Observable<any> {    
    return this.http.get('https://localhost:44373/User/UpdateUser'+  "/" + userId);
  }

  DeleteUser(userId: Number): Observable<any> {    
    return this.http.get('https://localhost:44373/User/DeleteUser'+  "/" + userId);
  }

  GetAllUsers(): Promise<any> {
    return this.http.get<any>('https://localhost:44373/User/GetAllUsers').toPromise();    
  }  
 
}