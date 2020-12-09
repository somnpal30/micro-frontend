import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var Luigi: any;
declare var I18nProvider: any;
declare var ContextSwitcher: any;

@Component({
  selector: 'app-luigi',
  templateUrl: './luigi.component.html',
  styleUrls: ['./luigi.component.css']
})
export class LuigiComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    const i18nProvider = new I18nProvider();

    i18nProvider.init().then(() => {
      const cntxSwitcher = new ContextSwitcher(i18nProvider);
      //console.log(cntxSwitcher)
      this.httpClient.get("assets/luigi-config-2.json").subscribe(data => {
        //Luigi.i18n().setCurrentLocale('en')

        //console.log(data.navigation.nodes[0].hideFromNav)
        Luigi.setConfig(data);
        Luigi.getConfigValue('navigation').contextSwitcher = cntxSwitcher.data
        //Luigi.getConfigValue('settings').customTranslationImplementation =i18nProvider
        Luigi.getConfig().settings = cntxSwitcher.settings
        Luigi.getConfig().lifecycleHooks = cntxSwitcher.hook
      });
    });
  }
}
