import { Component, OnInit } from '@angular/core';
import { Otp } from '../../users-view-approval/model/otp';
import { ActivatedRoute } from '@angular/router';
import { RemotedataService } from '../../users-view-approval/service/remotedata.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otpval:any;
  warningMsg ;

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: ''

  };

  constructor(private route: ActivatedRoute, private httpService: RemotedataService) {
  }

  ngOnInit(): void {
  }

  submit = () => {
    if(this.otpval?.length === this.config.length){
      let otpObject = new Otp();
      otpObject.otp = this.otpval;
      otpObject.session_state = this.route.snapshot.queryParamMap.get('session_state');
      otpObject.prng = this.route.snapshot.queryParamMap.get('prng');
      this.httpService.validateOTP(otpObject).subscribe(resp => {
        //window.location.href = 'http://localhost:4200?'+ resp.location
        window.location.href = resp.location;
      }, error => {
        var err = error as HttpErrorResponse;
        this.warningMsg = err.error;

      });
    }

  };

  onOtpChange = (event: any) => {
    this.otpval = event.toString();
  };
}
