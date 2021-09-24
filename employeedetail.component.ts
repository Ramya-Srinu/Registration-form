import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { User } from '../user';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private notifyService: NotificationService, private employeeService: EmployeeService, private router: Router, private route:
    ActivatedRoute) { }
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

    else {
      this.employeeService.doRegistration(this.user)
        .subscribe((data) => {
          debugger;

          this.router.navigateByUrl('/company');
          this.data = this.user.registerId;
          debugger;




        });

    }

    if (this.submitted == true) {
      this.notifyService.showSuccess("Success", "Submitted successfully");
    }
  }
  btnClick() {
    this.router.navigateByUrl('/company');
  };

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

