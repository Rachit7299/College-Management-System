import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
    constructor(private http:HttpClient, private router: Router) { }

    getAllStudents():Observable<any>{
        return this.http.get('http://localhost:3000/students/get-all');
    }

    createStudent(data):Observable<any>{
        return this.http.post('http://localhost:3000/students/add-student',data);
    }

    addSubjects(data,id):Observable<any>{
        return this.http.post('http://localhost:3000/students/add-subjects?id='+id,data);
    }
    
    updateStudent(data,id):Observable<any>{
        return this.http.patch('http://localhost:3000/students/update-student?id='+id,data);
    }

    getfilteredStudents(yr,br,cr):Observable<any>{
        return this.http.get('http://localhost:3000/students/get-filter?year='+yr+'&branch='+br+'&course='+cr);
    }

    getOneStudent(id):Observable<any>{
        return this.http.get('http://localhost:3000/students/get-one?id='+id)
    }

    getImage(id):Observable<any>{
        return this.http.get('http://localhost:3000/students/get-image?id='+id,{ responseType : 'blob'})
    }
}