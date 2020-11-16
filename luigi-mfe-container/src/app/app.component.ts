import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


declare var Luigi: any;
declare var I18nProvider: any;
declare var ContextSwitcher: any;
declare var LuigiConfig: any;

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

    i18nProvider.init().then(() => {
      const cntxSwitcher = new ContextSwitcher(i18nProvider);
      //console.log(cntxSwitcher)
      this.httpClient.get("assets/luigi-config.json").subscribe(data => {
        Luigi.setConfig(data);
        Luigi.getConfigValue('navigation').contextSwitcher = cntxSwitcher.data
        //Luigi.getConfigValue('settings').customTranslationImplementation =i18nProvider
        Luigi.getConfig().settings = cntxSwitcher.settings
        Luigi.getConfig().lifecycleHooks = cntxSwitcher.hook
      });
    });
  }
}
