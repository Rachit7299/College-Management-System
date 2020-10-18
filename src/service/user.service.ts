import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router: Router) { }

  login(data):Observable<any>{
    return this.http.post('http://localhost:3000/user/login',data);
  }

  register(data):Observable<any>{
    return this.http.post('http://localhost:3000/user/register',data);
  }

  getALL():Observable<any>{
    return this.http.get('http://localhost:3000/user/getall');
  }

  getUser(id):Observable<any>{
    return this.http.get('http://localhost:3000/user/getuser/'+id);
  }

  delUser(id):Observable<any>{
    return this.http.delete('http://localhost:3000/user/delete/'+id);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.replace('');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  
}
