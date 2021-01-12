import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './users-view-approval/component/user/user.component';
import {UserViewComponent} from './users-view-approval/component/user-view/user-view.component';
import {UserApprovalComponent} from './users-view-approval/component/user-approval/user-approval.component';
import {UserSubmissionComponent} from './users-view-approval/component/user-submission/user-submission.component';
import {OtpComponent} from './view/otp/otp.component';
import {UnauthComponent} from './view/unauth/unauth.component';
import {AuthorizeGuard} from './common/utils/AuthorizeGuard';

const routes: Routes = [

  {path: '', redirectTo: '/user/approval', pathMatch: 'full'},
  {
    path: 'user', component: UserComponent, children: [
      {path: 'myusers', component: UserSubmissionComponent},
      {path: 'approval', component: UserApprovalComponent, canActivate: [AuthorizeGuard]},
      {path: 'view-details', component: UserViewComponent}
    ]
  },
  {path: 'otp', component: OtpComponent},
  {path: 'unauthorized', component: UnauthComponent},
  {path: '**', redirectTo: '/unauthorized'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

