import {Component, OnInit} from '@angular/core';
declare var LuigiClient: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  login = () => {
    LuigiClient.sendCustomMessage({id: 'overview'});
  }

}
