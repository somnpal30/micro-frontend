import { Component, OnInit } from '@angular/core';
import { Otp } from '../../users-view-approval/model/otp';
import { ActivatedRoute } from '@angular/router';
import { RemotedataService } from '../../users-view-approval/service/remotedata.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: RemotedataService) {
  }

  ngOnInit(): void {
  }

  submit = () => {
    let otpObject = new Otp();
    otpObject.otp = '2345';
    otpObject.session_state = this.route.snapshot.queryParamMap.get('session_state');
    otpObject.prng = this.route.snapshot.queryParamMap.get('prng');
    this.httpService.validateOTP(otpObject).subscribe(resp => {
      //window.location.href = 'http://localhost:4200?'+ resp.location
      window.location.href = resp.location
    },error => {
      console.log(error)
    });
  };
}
