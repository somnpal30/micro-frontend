import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LuigiContextService} from '@luigi-project/client-support-angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  title: string;
  content: string;

  constructor(private ref: ChangeDetectorRef, private contextService: LuigiContextService) {}

  ngOnInit(): void {

    console.log(this.contextService)

    /*addInitListener(initialContext => {
      this.title = initialContext.title;
      this.content = initialContext.content;
      this.ref.detectChanges();
    });*/
  }
    // this.title = "testing..."

}
