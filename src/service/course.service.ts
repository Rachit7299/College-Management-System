import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

    constructor(private http:HttpClient, private router: Router) { }

    //course
    getallcourses():Observable<any>{
        return this.http.get('http://localhost:3000/courses/get-all');
    }

    getcourses():Observable<any>{
      return this.http.get('http://localhost:3000/courses/get-courses');
  }

  createCourse(data):Observable<any>{
    return this.http.post('http://localhost:3000/courses/create',data);
  }

  deleteCourse(name):Observable<any>{
    return this.http.delete('http://localhost:3000/courses/delete-course/'+name)
  }

  findCourse(name):Observable<any>{
    return this.http.get('http://localhost:3000/courses/find-course/'+name);
  }

  getcourseyear(name):Observable<any>{
    return this.http.get('http://localhost:3000/courses/get-years?name='+name);
  }
//Branches

  getallbranches(name):Observable<any>{
    return this.http.get('http://localhost:3000/courses/get-branches/'+name);
  }

  deletebranches(name,b_name):Observable<any>{
    return this.http.delete('http://localhost:3000/courses/del-branch/'+name+'&'+b_name);
  }

  addBranch(data,name):Observable<any>{
    return this.http.post('http://localhost:3000/courses/add-branches/'+name,data);
  }

//Sybjects

  addSubjects(data,id):Observable<any>{
    return this.http.post('http://localhost:3000/courses/add-subject/'+id,data);
  }
  
  getallsubjects(id):Observable<any>{
      return this.http.get('http://localhost:3000/courses/get-subjects/'+id);
  }

  deleteSubjects(id,subject_name):Observable<any>{
    return this.http.delete('http://localhost:3000/courses/del-subject/'+id+'&'+subject_name);
  }

}