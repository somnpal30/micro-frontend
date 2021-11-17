import {ChangeDetectorRef, Component, OnInit} from '@angular/core';


import * as LuigiClient from '@luigi-project/client';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title: string;
  content: string;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    /*    LuigiClient.addCustomMessageListener('myprefix.my-custom-message-for-client'
          , (data) => console.log(data));*/

    console.log(LuigiClient.getToken());

    LuigiClient.addInitListener(initialContext => {
      this.title = initialContext.title;
      this.content = initialContext.content;
      console.log(initialContext);
      console.log(this.title + ' : ' + this.content);
      this.ref.detectChanges();
    });

    /*addInitListener(initialContext => {
      this.title = initialContext.title;
      this.content = initialContext.content;
      this.ref.detectChanges();
    });*/
  }

  // this.title = "testing..."

}
