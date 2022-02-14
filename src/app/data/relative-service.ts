import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Relative } from '../data/relative';

@Injectable({
  providedIn: 'root'
})
export class RelativeService {

  constructor(private http: HttpClient) { }

  SaveRelative(relative: Relative): Observable<any> {
    return this.http.post('https://localhost:44373/Relative/SaveRelative', relative);
  }

  UpdateRelative(relativeId: Number): Observable<any> {    
    return this.http.get('https://localhost:44373/User/UpdateRelative'+  "/" + relativeId);
  }

  DeleteRelative(relativeId: Number): Observable<any> {    
    return this.http.get('https://localhost:44373/User/DeleteRelative'+  "/" + relativeId);
  }

  GetAllRelatives(): Observable<any> {
    return this.http.get('https://localhost:44373/User/GellAllRelatives');
  }  
 
}