import { Component , OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  constructor(private breakpointObserver: BreakpointObserver, private apiService: DashService) {}

  notices:any;
  results:any;
  admin:Boolean;
  isLoading:any;

  ngOnInit(){
    this.isLoading=true;
    this.apiService.getNotices().subscribe(
      (res)=>{
        this.notices=res;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error');
        }
      }
    )


    this.apiService.getCourse().subscribe(
      (res)=>{
        this.results=res;
        if(localStorage.getItem('priv') == '1'){
          this.admin=true
        }
        else{
          this.admin=false;
        }
      },(err)=>{
        if(err.status!=200){
          window.alert('Error');
        }
      }
    )

    this.apiService.getStudents().subscribe(
      (res)=>{
        this.results.students=res;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error');
        }
      }
    )

    this.apiService.gettimeTable().subscribe(
      (res)=>{
        this.results.timeTable=res;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error');
        }
      }
    )

    this.apiService.getUsers().subscribe(
      (res)=>{
        this.results.user=res;
        this.isLoading=false;
      },(err)=>{
        if(err.status!=200){
          window.alert('Error');
        }
        this.isLoading=false;
      }
    )
  }


}
