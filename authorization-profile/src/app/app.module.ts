import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationProfileListComponent} from './view/authorization-profile-list/authorization-profile-list.component';
import {DataTableComponent} from './component/data-table/data-table.component';
import {FilterComponent} from './component/filter/filter.component';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    AuthorizationProfileListComponent,
    DataTableComponent,
    FilterComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    OverlayPanelModule,
    DividerModule,
    CheckboxModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
