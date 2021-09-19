import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { User } from '../user';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  [x: string]: any;


  user: User = new User;
  message: any;

  fb: any;
  list: any;
  element: any;
  submitted = false;
  listData: any;
  isActive: any;
  updated = false;
  fileToUpload: any;


  countries = [
    { id: 1, name: 'India' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'America' },
    { id: 4, name: 'Japan' },
    { id: 4, name: 'China' },
    { id: 4, name: 'Africa' },
    { id: 4, name: 'Pakistan' },
    { id: 4, name: 'Congo' }

  ];


  states = [
    { id: 1, name: 'TamilNadu' },
    { id: 2, name: 'Kerala' },
    { id: 3, name: 'Mumbai' },
    { id: 4, name: 'Banglore' },
    { id: 4, name: 'AndhraPradesh' },
    { id: 4, name: 'Delhi' },
    { id: 4, name: 'Gujarat' },
    { id: 4, name: 'UttarPradesh' }

  ];

  constructor(private notifyService: NotificationService, private employeeService: EmployeeService) { }
  ngOnInit() {

  }




  registerNow() {
    debugger;
    if (this.user.name == null) {
      this.notifyService.showError("Error !!", "FullName required");
    }
    else if (this.user.gender == null) {
      this.notifyService.showError("Error !!", "Gender required");
    }
    else if (this.user.country == null) {
      this.notifyService.showError("Error !!", "Country required");
    }
    else if (this.user.state == null) {
      this.notifyService.showError("Error !!", "State required");
    }
    else if (this.user.number
      == null) {
      this.notifyService.showError("Error !!", "PhoneNumber required");
    }
    else if (this.user.companyName == null) {
      this.notifyService.showError("Error !!", "CompanyName required");
    }
    else if (this.user.emailId == null && pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
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


  showToasterError() {
    this.notifyService.showError("Error !!", "");
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("successfull !!", "");
  }
  showToasterUpdate() {
    this.notifyService.showSuccess("Updated successfully !!", "");
  }
  showToasterInfo() {
    this.notifyService.showInfo("Form reseted!!", "");
  }


}

function pattern(arg0: RegExp) {
  throw new Error('Function not implemented.');
}

