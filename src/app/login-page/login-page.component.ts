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

  Login(){
    console.log(this.loginForm.value);
    this.apiService.login(this.loginForm.value).subscribe(
      (res)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('user_id',res._id);
        if(res.privilege==1){
          this.router.navigate(['/admin']);
        }
        else if(res.privilege==2){
          this.router.navigate(['/faculty']);
        }
      },(err)=>{
        console.log(err)
      }
    )
  }




}
