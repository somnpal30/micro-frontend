import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


declare var Luigi: any;
declare var I18nProvider : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'luigi-mfe-container';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const i18nProvider = new I18nProvider();
    console.log(i18nProvider);

    this.httpClient.get("assets/luigi-config.json").subscribe(data => {
      i18nProvider.init().then(() => {
        Luigi.setConfig(data);
      })
      //
    })
  }
}
