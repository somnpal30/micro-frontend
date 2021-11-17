import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {LuigiComponent} from './views/luigi/luigi.component';
import {OverviewComponent} from './views/protected/overview/overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/digital-portal', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'digital-portal', component: LuigiComponent},
  {path: 'secure/dashboard', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
