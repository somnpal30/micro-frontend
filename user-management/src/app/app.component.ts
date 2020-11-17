import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-management';
  constructor(private translate: TranslateService) {
    var userLang = navigator.language ;
    //console.log(userLang);
    translate.setDefaultLang('fr');
    translate.use('es')
  }
}
