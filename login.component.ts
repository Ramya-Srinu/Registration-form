import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private notifyService: NotificationService) {

  }


  setOtp(otp: string) {
    console.log('the opt is ', otp);
  }
  Verify() {
    this.notifyService.showSuccess("verified ", "");
  }
}