import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanydetailComponent } from './companydetail/companydetail.component';

import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
const routes: Routes = [

  { path: "", redirectTo: "users", pathMatch: "full" },
  { path: 'users', component: CompanydetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }