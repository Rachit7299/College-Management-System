import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private apiService: UserService) { }

  loginForm = this.fb.group({
    username:[''],
    pswd:['']
  })

  loginForm2 = this.fb.group({
    username:[''],
    pswd:['']
  })


  ngOnInit(): void {
  }

  adminLogin(){
    this.apiService.login(this.loginForm.value).subscribe(
      (res)=>{
        if(res.privilege==1){
          localStorage.setItem('token',res.token);
          localStorage.setItem('user_id',res._id);
          this.router.navigate(['/admin']);
        }
        else{
          window.alert('Only admins are allowed!')
        }
      },(err)=>{
        console.log(err)
      }
    )
  }

  facultyLogin(){
    this.apiService.login(this.loginForm2.value).subscribe(
      (res)=>{
        if(res.privilege==2){
          localStorage.setItem('token',res.token);
          localStorage.setItem('user_id',res._id);
          this.router.navigate(['/faculty']);
        }
        else{
          window.alert('Faculty Not Found')
        }
      },(err)=>{
        console.log(err)
      }
    )
  }




}
