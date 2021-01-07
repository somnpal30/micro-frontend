import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var Luigi: any;
declare function loadLuigi():any;

@Component({
  selector: 'app-luigi',
  templateUrl: './luigi.component.html',
  styleUrls: ['./luigi.component.css']
})
export class LuigiComponent implements OnInit {
  data = {
    msg: 'luigi.auth.tokenIssued',
    authData: {
      accessToken: new Date().getMilliseconds()
    }
  };

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    loadLuigi()
    /*this.httpClient.get('assets/luigi-config.json').subscribe(data => {
      Luigi.setConfig(data);

    });*/

  }
}
