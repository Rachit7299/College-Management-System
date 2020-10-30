import { Component, OnInit, Inject } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../../service/student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  constructor(private fb : FormBuilder, private cServ:CourseService, private apiService: StudentService) { }

  createStudent = this.fb.group({
    name:[''],
    email:[''],
    mobile:[''],
    course:[''],
    branch:[''],
    std_no:[''],
    dob:[''],
    gender:[''],
    year:[''],
    semester:[''],
    core_subjects:[''],
    optional_subjects:[''],
    address:[''],
    city:[''],
    fatherName:[''],
    motherName:[''],
    fatherOccupation:[''],
    motherOccupation:[''],
    hostler:[''],
    feeStatus:['']
  })
  
  isEditable = true;
  genders=['Male', 'Female'];
  courses=[];
  branches=[];
  OpSub=[];  
  hostel=['Yes','No'];
  years=[
    {"value":1,"viewValue":"First"},
    {"value":2,"viewValue":"Second"},
    {"value":3,"viewValue":"Third"},
    {"value":4,"viewValue":"Fourth"}
  ]
  semesters=[
    {"value":1,"viewValue":"First"},
    {"value":2,"viewValue":"Second"},
    {"value":3,"viewValue":"Third"},
    {"value":4,"viewValue":"Fourth"},
    {"value":5,"viewValue":"Fifth"},
    {"value":6,"viewValue":"Six"},
    {"value":7,"viewValue":"Seven"},
    {"value":8,"viewValue":"Eight"}
  ]


  ngOnInit(): void {
    this.cServ.getcourses().subscribe(
      (res)=>{
        this.courses=res;
      },
      (err)=>{
        if(err.status!=200){
          window.alert('Error')
        }
      }
    )
  }

  branchform(){
    this.cServ.getallbranches(this.createStudent.value.course).subscribe(
      (res)=>{
        this.branches=res;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error')
        }
      }
    )
  }

  submit(f){
    console.log(this.createStudent.value)
    window.location.reload()
  }

}
