import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { ViewSubjectsComponent , SubjectDialogModel } from '../view-subjects/view-subjects.component';
import { ManageSubjectsComponent , ManageSubjectDialogModel } from '../manage-subjects/manage-subjects.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private dialog: MatDialog,private apiService:CourseService) { }

  courses=[];
  page:number=1;
  admin:boolean;

  ngOnInit(): void {
    this.admin=false;
    this.apiService.getallcourses().subscribe(
      (res)=>{
        this.courses=res;
        if(localStorage.getItem('priv') == '1'){
          this.admin=true
        }
        else{
          this.admin=false;
        }
      },(err)=>{
        if(err.status!=200){
          window.alert('Error Loading Courses!')
        }
      }
    )
  }

  viewSubjects(id){
    const course_id = new SubjectDialogModel(id);
    this.dialog.open(ViewSubjectsComponent,{
      width: "856px",
      height:"476px",
      data: course_id
    })
  }

  manageSubjects(id,name){
    const course_id = new ManageSubjectDialogModel(id,name);
    this.dialog.open(ManageSubjectsComponent,{
      width: "700px",
      height:"496px",
      data: course_id
    })
  }

}
