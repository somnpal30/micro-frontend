import { Component, OnInit } from '@angular/core';
import {LuigiContextService} from '@luigi-project/client-support-angular';
declare var LuigiClient: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = false;
  constructor(private contextService : LuigiContextService) { }

  ngOnInit(): void {

  }

  login = () => {
    //otp.
    LuigiClient.sendCustomMessage({id: 'overview'});
  }
}
