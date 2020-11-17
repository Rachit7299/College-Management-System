import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TimeTableService {

    constructor(private http:HttpClient, private router: Router) { }

    getTables(cr,br,yr):Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/time-table/get-filter?course='+cr+'&branch='+br+'&year='+yr)
    }

    addTables(data):Observable<any>{
        return this.http.post('https://ionic-server-app.herokuapp.com/time-table/add-timeTable',data);
    }

    getImage(id):Observable<any>{
        return this.http.get('https://ionic-server-app.herokuapp.com/time-table/get-image?id='+id,{ responseType : 'blob'});
    }
}