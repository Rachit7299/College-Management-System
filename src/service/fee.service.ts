import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FeeService {

    constructor(private http:HttpClient, private router: Router) { }

    getAll():Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/fees/get-all');
    }

    getcourse(course,year):Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/fees/get-filter?course='+course+"&year="+year);
    }

    deletecourse(course,branch,year):Observable<any>{
        return this.http.delete('https://ionic-server-app.herokuapp.com/fees/delete?course='+course+"&year="+year+"&branch"+branch);
    }

    create(data):Observable<any>{
        return this.http.post('https://ionic-server-app.herokuapp.com/fees/create',data);
    }
}