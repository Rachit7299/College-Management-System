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
    return this.http.post('https://ionic-server-app.herokuapp.com/user/login',data);
  }

  register(data):Observable<any>{
    return this.http.post('https://ionic-server-app.herokuapp.com/user/register',data);
  }

  getALL():Observable<any>{
    return this.http.get('https://ionic-server-app.herokuapp.com/user/getall');
  }

  getUser(id):Observable<any>{
    return this.http.get('https://ionic-server-app.herokuapp.com/user/getuser/'+id);
  }

  delUser(id):Observable<any>{
    return this.http.delete('https://ionic-server-app.herokuapp.com/user/delete/'+id);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('priv');
    window.location.replace('');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  
}
