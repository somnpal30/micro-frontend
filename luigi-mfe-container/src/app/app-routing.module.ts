import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './component/overview/overview.component';
import {LuigiComponent} from './component/luigi/luigi.component';
import {LoginComponent} from '../../../../luigi-example/luigi-ng-poc/src/app/pages/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/luigi', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'luigi', component: LuigiComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
