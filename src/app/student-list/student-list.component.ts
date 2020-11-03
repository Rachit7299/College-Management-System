import { Component, OnInit } from '@angular/core';
import { ManageStudentsComponent,StudentDialogModel } from '../manage-students/manage-students.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../../service/student.service'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: StudentService) { }

  results:[];
  total;
  page:number=1;
  privilege=['-','Administrator','Faculty']
  years=['','First','Second','Third','Fourth','Fifth'];
  isLoading=false;

  ngOnInit(): void {
    this.isLoading=true;
    this.apiService.getAllStudents().subscribe(
      (data)=>{
        this.results=data;
        this.total=data.length;
        this.isLoading=false;
      },(err)=>{
        window.alert(err);
        this.isLoading=false;
      }
    )
  }

  openDialog(id){
    const user_id = new StudentDialogModel(id);
    this.dialog.open(ManageStudentsComponent,{
      width: "900px",
      height:"576px",
      data: user_id
    })
  }

}
