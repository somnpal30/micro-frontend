import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserComponent} from './users-view-approval/component/user/user.component';
import {UserViewComponent} from './users-view-approval/component/user-view/user-view.component';
import {MatUiModule} from './mat-ui.module';
import {UserApprovalModule} from './users-view-approval/component/user-approval/user-approval.module';
import {UserSubmissionModule} from './users-view-approval/component/user-submission/user-submission.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OtpComponent } from './view/otp/otp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, UserViewComponent, OtpComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatUiModule,
    UserApprovalModule,
    UserSubmissionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],

      },
      //defaultLanguage: 'fr',
      //useDefaultLang :true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
