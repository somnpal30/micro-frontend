import { Component, Input, OnInit } from '@angular/core';
import { EventStoreService } from '../../../service/event-store.service';

@Component({
  selector: 'filter-dropdown',
  template: `
    <div class='filter-container'>
      <button mat-icon-button id='button' style='color: #e9e9e9; font-weight: bold' (click)='changeValue($event)'>
        <mat-icon class='material-icons-outlined'>filter_alt_outline</mat-icon>
        <span style='color: #c0c0c0; font-weight: bold'>Filter</span>
        <mat-icon>{{icon}}</mat-icon>
      </button>
    </div>
  `,
  styles: []
})
export class FilterDropdownComponent implements OnInit {
  icon = 'arrow_drop_down';

  constructor(private eventStoreService: EventStoreService) {
  }

  @Input() options: string[];

  ngOnInit(): void {
  }

  changeValue = (event) => {
    if (this.icon === 'arrow_drop_down') {
      this.icon = 'arrow_drop_up';
    } else {
      this.icon = 'arrow_drop_down';
    }

    //console.log(event.value)
    //this.seletedOption = '';
    //this.eventStoreService.emitClickEvent(event.value);
  };

}
