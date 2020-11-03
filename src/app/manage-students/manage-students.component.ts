import { StudentService } from '../../service/student.service'
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  id:any;

  constructor(private fb: FormBuilder, private apiService: StudentService,public dialogRef2: MatDialogRef<ManageStudentsComponent>,@Inject(MAT_DIALOG_DATA) public data: StudentDialogModel) 
  {this.id=data.user_id; }


  pageload = false;
  results:any;
  years=['','First','Second','Third','Fourth','Fifth'];

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.results.image = reader.result;
    }, false);
  
    if (image) {
       reader.readAsDataURL(image);
    }
  }

  ngOnInit(): void {
    this.pageload=true;
    this.apiService.getOneStudent(this.id).subscribe(
      (res)=>{
        this.results=res;
        this.results.dob=this.results.dob.slice(0,10);
        this.pageload=false;
      },(err)=>{
        if(err.status!=200){
          window.alert(err);
        }
      }
    )
    this.apiService.getImage(this.id).subscribe(
      (res)=>{
        this.createImageFromBlob(res);
      },(err)=>{
        if(err.status!=200){
          window.alert('Error')
        }
      }
    )
  }

}

export class StudentDialogModel {

  constructor(public user_id: string) {
  }
}