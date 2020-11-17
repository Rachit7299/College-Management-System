import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DashService {

    constructor(private http:HttpClient, private router: Router) { }

    getNotices():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/notice/get-notices')
    }

    getCourse():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/courses/get-count-all')
    }

    gettimeTable():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/time-table/get-count')
    }

    getStudents():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/students/get-count')
    }

    getUsers():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/user/get-count')
    }
}
