import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2CompleterModule } from "ng2-completer";
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal'
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxOtpInputModule } from 'ngx-otp-input';


import { OtpVerificationModule } from 'otp-verification';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent, EmployeedetailComponent, HomeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, NgxOtpInputModule,
    BrowserAnimationsModule, FormsModule, OtpVerificationModule,
    ToastrModule.forRoot(), NgxSmartModalModule.forRoot(), NgSelectModule, Ng2CompleterModule, HttpClientModule, RouterModule
  ],
  providers: [NgxSmartModalService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }