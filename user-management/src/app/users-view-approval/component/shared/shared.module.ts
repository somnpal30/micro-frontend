import {NgModule} from '@angular/core';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {FilterDropdownComponent} from './filter-dropdown/filter-dropdown.component';
import {RejectionDialogComponent} from './rejection-dialog/rejection-dialog.component';
import {MatUiModule} from '../../../mat-ui.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthzComponent} from '../../../view/authz/authz.component';

@NgModule({
  declarations: [ConfirmationDialogComponent, FilterDropdownComponent, RejectionDialogComponent,AuthzComponent],
  imports: [MatUiModule, FormsModule, CommonModule],
  exports: [
    FormsModule, CommonModule, ConfirmationDialogComponent, FilterDropdownComponent, RejectionDialogComponent,AuthzComponent
  ]
})

export class SharedModule {
}


