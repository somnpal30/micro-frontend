import {Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import * as LuigiClient from '@luigi-project/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'user-management';

  constructor(private translate: TranslateService) {
    var userLang = navigator.language ;
    //console.log(userLang);
    translate.setDefaultLang('fr');
    translate.use(localStorage.getItem("lang"))

  /*  translate.onLangChange.subscribe((event : TranslationChangeEvent) => {
      console.log("lang changed");

    })*/
  }

  ngOnInit(): void {
    LuigiClient.addContextUpdateListener(this.updateCurrentLanguage);
    LuigiClient.addInitListener(this.updateCurrentLanguage);
  }

  updateCurrentLanguage = () => {
   /* this.currentLanguage = LuigiClient.uxManager().getCurrentLocale();
    this.translate.currentLang = this.currentLanguage;
    console.log(this.currentLanguage)
    this.translate.use(this.currentLanguage)*/
    //window.location.reload();
    localStorage.setItem("lang",LuigiClient.uxManager().getCurrentLocale());
  }

}
