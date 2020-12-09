import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

declare var Luigi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private httpClient: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  login = () => {
      this.httpClient.get("assets/luigi-config-2.json").subscribe(
        data => {

          //Luigi.setConfig(data);
          //Luigi.configChanged('navigation')
          console.log(Luigi.getConfigValue('navigation'));
          //console.log( Luigi.getConfigValue('navigation'));
         // this.router.navigate(['luigi']);

        }
      );
  }
}
