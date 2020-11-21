import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './component/overview/overview.component';
import {LuigiComponent} from './component/luigi/luigi.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/luigi', pathMatch: 'full'
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'luigi', component: LuigiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
