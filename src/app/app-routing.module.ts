import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyNavComponent } from './faculty-nav/faculty-nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewFeeComponent } from './view-fee/view-fee.component';
import { ManageFeeComponent } from './manage-fee/manage-fee.component'

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'admin', component: MainNavComponent,canActivate:[AuthGuard],
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'manage-users', component: UserListComponent},
    {path: 'manage-students', component: StudentListComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path: 'view-fee', component: ViewFeeComponent},
    {path: 'manage-fee', component: ManageFeeComponent}
  ]
  },
  {path: 'faculty', component: FacultyNavComponent,canActivate:[AuthGuard],
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'manage-students', component: StudentListComponent},
    {path: ' view-fee', component:ViewFeeComponent}
  ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
