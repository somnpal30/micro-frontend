import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './users-view-approval/component/user/user.component';
import {UserViewComponent} from './users-view-approval/component/user-view/user-view.component';
import {UserApprovalComponent} from './users-view-approval/component/user-approval/user-approval.component';
import {UserSubmissionComponent} from './users-view-approval/component/user-submission/user-submission.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/user/approval', pathMatch: 'full'
  },
  {
    path: 'user', component: UserComponent, children: [
      {path: 'myusers', component: UserSubmissionComponent},
      {path: 'approval', component: UserApprovalComponent},
      {path: 'view-details', component: UserViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

