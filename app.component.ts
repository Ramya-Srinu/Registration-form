import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from './notification.service'
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CompleterService, CompleterData } from 'ng2-completer';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private http: HttpClient, private fb: FormBuilder, private employeeService: EmployeeService, private notifyService: NotificationService, public ngxsmartservice: NgxSmartModalService, private completerService: CompleterService) {

  }


  ngOnInit() {

  }




}