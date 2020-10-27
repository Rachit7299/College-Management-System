import { Component, OnInit } from '@angular/core';
import { FeeService } from '../../service/fee.service';
import { CourseService } from '../../service/course.service'

@Component({
  selector: 'app-view-fee',
  templateUrl: './view-fee.component.html',
  styleUrls: ['./view-fee.component.css']
})
export class ViewFeeComponent implements OnInit {

  constructor(private apiService: FeeService, private courseService:CourseService) { }
  year = [{'value':1, 'viewValue':'First'},{'value':2, 'viewValue':'Second'},{'value':3, 'viewValue':'Third'},{'value':4, 'viewValue':'Fourth'}];
  btechFee =[];
  yearfee=[];  
  iscourses=false;
  courses=[];
  i:any;

  ngOnInit(): void {
    this.courseService.getcourses().subscribe(
      (res)=>{
        this.courses=res;
        this.iscourses=true;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error')
        }
      }
    );

    
    for(this.i=0;this.i<4;this.i++){    
      let x=0;  
      x=this.i+1;
      this.apiService.getcourse('B-tech',x).subscribe(
        (res)=>{
          this.yearfee=res;
          this.btechFee[x]=this.yearfee;   
        },
        (err)=>{
          window.alert(err);
        }
      )
    }
  }

}