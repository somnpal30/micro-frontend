import {Component, OnInit} from '@angular/core';
import {RemoteDataService} from "../../service/remote-data.service";
import {WorkspaceDetails} from "../../model/workspace";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  workspaceCategoryDetails: WorkspaceDetails[] = [];

  constructor(private remoteService: RemoteDataService) {
  }

  ngOnInit(): void {
    this.remoteService.loadWorkspace().subscribe(
      resp => {
        console.log(resp)
        this.workspaceCategoryDetails = resp?.workspaceCategoryDetails.sort( (o1,o2) => (o1.workspaceName > o2.workspaceName ? 1: -1) );
      },
      error => {
        console.error(error)
      }
    );
  }

}
