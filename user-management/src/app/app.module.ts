import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import {OtpComponent} from './view/otp/otp.component';
import {NgOtpInputModule} from 'ng-otp-input';
import {SharedModule} from './users-view-approval/component/shared/shared.module';
import {AppInitService} from './app-init.service';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, UserViewComponent, OtpComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
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
    }),
    SharedModule
  ],
  providers: [
    AppInitService,
    {provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true}
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function initializeApp(appInitService: AppInitService, route : Router) {
  return (): Promise<any> => {
      return appInitService.Init();
  };
}
