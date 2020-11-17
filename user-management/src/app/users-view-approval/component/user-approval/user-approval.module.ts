import {NgModule} from '@angular/core';
import {MatUiModule} from '../../../mat-ui.module';
import {SharedModule} from '../shared/shared.module';
import {UserApprovalComponent} from './user-approval.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [UserApprovalComponent],
    imports: [
        MatUiModule,
        SharedModule,
        TranslateModule
    ],
  exports: [
    //UserApprovalComponent
  ]
})

export class UserApprovalModule {

}
