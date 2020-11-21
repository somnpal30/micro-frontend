import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LuigiComponent } from './component/luigi/luigi.component';
import { OverviewComponent } from './component/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LuigiComponent,
    OverviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
