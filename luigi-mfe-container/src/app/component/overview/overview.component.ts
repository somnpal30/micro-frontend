import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as LuigiClient from '@luigi-project/client';
import {
  addInitListener,
  //addContextUpdateListener
} from '@luigi-project/client';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title: string;
  content: string;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {

    addInitListener(initialContext => {
      //this.title = initialContext.title;
      this.title = "Login page"
      this.content = initialContext.content;
      this.ref.detectChanges();
    });
  }
    // this.title = "testing..."

}
