import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  id:any;
  subjects=[];
  page:number=1;

  constructor( private apiService: CourseService,public dialogRef2: MatDialogRef<ViewSubjectsComponent>,@Inject(MAT_DIALOG_DATA) public data: SubjectDialogModel) 
  {this.id=data.user_id; }

  ngOnInit(): void {
    this.apiService.getallsubjects(this.id).subscribe(
      (res)=>{
        this.subjects=res;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error Loading Subjects!')
        }
      }
    )
  }

}

export class SubjectDialogModel {

  constructor(public user_id: string) {
  }
}