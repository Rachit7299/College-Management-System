import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyNavComponent } from './faculty-nav/faculty-nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'admin', component: MainNavComponent,
  children:[

  ]
  },
  {path: 'faculty', component: FacultyNavComponent,
  children:[]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
