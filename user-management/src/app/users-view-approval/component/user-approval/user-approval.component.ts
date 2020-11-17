import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApprovalList} from '../../model/approval-list';
import {RemotedataService} from '../../service/remotedata.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {RejectionDialogComponent} from '../shared/rejection-dialog/rejection-dialog.component';
import {EventStoreService} from '../../service/event-store.service';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import * as LuigiClient from '@luigi-project/client';

@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['select', 'approval_type', 'approval_level', 'submitted_by', 'submitted_on', "action", "action2"];
  displayedColumnValue: string[] = ['', 'Approval Type', 'Approval Level', 'Submitted By', 'Submitted On', 'Details', 'Action', 'Reject']
  options = ['All', 'Allocation', 'Addition', 'Modification', 'Reversal']
  dataSource;
  selection = new SelectionModel<ApprovalList>(true, []);

  comment: string = '';
  selectedFilterValue = '';

  subscription: Subscription;

  constructor(private dataService: RemotedataService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private eventStoreService: EventStoreService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  ngOnInit() {
    const initListenerId = LuigiClient.addInitListener((context) => console.log(context))




    this.subscription = this.eventStoreService.clickEventListener().subscribe(info => {
      //console.log(info)
      if (info !== this.options[0]) {
        this.selectedFilterValue = info
      } else {
        this.selectedFilterValue = '';
      }
      if (this.dataSource) {
        this.dataSource.filter = this.selectedFilterValue;
      }

    })

    this.dataService.loadApprovalList().subscribe(
      resp => {
        this.dataSource = new MatTableDataSource<ApprovalList>(resp);
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          // this.dataSource.filter = this.selectedFilterValue;

        });
      }
    );

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.id));
  }


  showDetails = (row) => {
    //console.log(row.id);
    this.router.navigate(['../view-details'],
      {relativeTo: this.route, queryParams: {identifier: row.id, mode: 'view'}, queryParamsHandling: 'merge'});

  }
  approve = (id: string) => {
    console.log(id);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {width: '400px'})

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'YES') {
        this.snackBar.open("Allocation of User Successfully", "Close", {
          duration: 1000,
        });
      }
    })
  }

  reject = (id: string) => {
    const dialogRef = this.dialog.open(RejectionDialogComponent, {width: '400px'})

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.comment = result;
    })

  }


}
