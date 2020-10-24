import { Component, OnInit } from '@angular/core';
import { ManageUserComponent,UserDialogModel } from '../manage-user/manage-user.component';
import { MatDialog } from '@angular/material/dialog';
import {UserService } from '../../service/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: UserService) { }

  results:[];
  total;
  page:number=1;
  privilege=['-','Administrator','Faculty']

  ngOnInit(): void {
    this.apiService.getALL().subscribe(
      (data)=>{
        this.results=data;
        this.total=data.length;

      },(err)=>{
        window.alert(err);
      }
    )
  }


  openDialog(id){
    const user_id = new UserDialogModel(id);
    this.dialog.open(ManageUserComponent,{
      width: "700px",
      height:"476px",
      data: user_id
    })
  }

}
