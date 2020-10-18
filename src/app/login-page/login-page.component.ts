import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

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
    console.log(this.loginForm.value);
    this.router.navigate(['/admin']);
  }

  facultyLogin(){
    console.log(this.loginForm2.value);
    this.router.navigate(['/faculty']);
  }



}
