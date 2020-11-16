import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// import {ContextSwitcher} from "./utils/Context-Switcher";


declare var Luigi: any;
declare var I18nProvider : any;
declare var ContextSwitcher : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'luigi-mfe-container';
  //context:ContextSwitcher;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {


    /* this.context = new ContextSwitcher();
     this.context.defaultLabel = 'Language';
     this.context.parentNodePath = '/#';
     this.context.lazyloadOptions= false;

     var option1 = new Option1();
     option1.label='French';
     option1.pathValue="FR";



     var option2 = new Option1();
     option2.label='English';
     option2.pathValue="EN"

     this.context.options = [option1,option2]*/



    const i18nProvider = new I18nProvider();
    const cntxSwitcher = new ContextSwitcher();
   // console.log(cntxSwitcher.init());
   /* cntxSwitcher.init().then(() => {

    })*/
    console.log(Luigi.i18n().getCurrentLocale());
    this.httpClient.get("assets/luigi-config.json").subscribe(data => {
      i18nProvider.init().then(() => {
        Luigi.setConfig(data);
        //Luigi.getConfigValue('navigation').contextSwitcher = cntxSwitcher;
        //console.log(Luigi.getConfigValue('navigation').contextSwitcher = cntxSwitcher.data);
         // console.log(Luigi.navigation())
        Luigi.getConfigValue('navigation').contextSwitcher = cntxSwitcher.data
      })

      //
    })
  }
}
