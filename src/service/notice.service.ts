import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NoticeService {

    constructor(private http:HttpClient, private router: Router) { }

    getNotices():Observable<any>{
        return this.http.get('http://localhost:3000/notice/get-notices')
    }

    addNotices(data):Observable<any>{
        return this.http.post('http://localhost:3000/notice/add-notice',data);
    }

    getImage(id):Observable<any>{
        return this.http.get('http://localhost:3000/notice/get-pdf?id='+id,{ responseType : 'blob'});
    }
}