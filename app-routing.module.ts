import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'Employee', component: EmployeedetailComponent },
  { path: 'company', component: HomeComponent },
  { path: 'email', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }