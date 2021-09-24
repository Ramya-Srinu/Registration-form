import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { NotificationService } from '../notification.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User;
  message: any;
  data: any;
  registerNow: any;



  constructor(private employeeService: EmployeeService, private notifyService: NotificationService) {

  }
  ngOnInit(): void {
    this.registerNow();

  }
  register() {

    if (this.user.companyName == null) {
      this.notifyService.showError("Error !!", "CompanyName required");
    }
    else if (this.user.emailId == null) {
      this.notifyService.showError("Error !!", "EmailId required");
    }
    else if (this.user.jobTitle == null) {
      this.notifyService.showError("Error !!", "Job Title required");
    }
    else if (this.user.experiance == null) {
      this.notifyService.showError("Error !!", "Years Of Experiance required");
    }
    else {
      this.employeeService.doRegistration(this.user)
        .subscribe((data) => {
          debugger;


          debugger;




        });
    }
  }


}

