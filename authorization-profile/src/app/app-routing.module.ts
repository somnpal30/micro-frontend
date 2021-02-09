import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationProfileListComponent} from "./view/authorization-profile-list/authorization-profile-list.component";

const routes: Routes = [
  { path: '',   redirectTo: '/authorization-profile-list', pathMatch: 'full' },
  {path: 'authorization-profile-list', component: AuthorizationProfileListComponent},
  {path: '**', component: AuthorizationProfileListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
