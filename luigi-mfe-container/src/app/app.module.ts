import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LuigiComponent} from './component/luigi/luigi.component';
import {OverviewComponent} from './component/overview/overview.component';
import {LuigiAngularSupportModule} from '@luigi-project/client-support-angular';
import {LoginComponent} from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LuigiComponent,
    OverviewComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LuigiAngularSupportModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
