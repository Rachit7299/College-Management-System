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
        return this.http.get('http://localhost:3000/time-table/get-filter?course='+cr+'&branch='+br+'&year='+yr)
    }

    addTables(data):Observable<any>{
        return this.http.post('http://localhost:3000/time-table/add-timeTable',data);
    }

    getImage(id):Observable<any>{
        return this.http.get('http://localhost:3000/time-table/get-image?id='+id,{ responseType : 'blob'});
    }
}