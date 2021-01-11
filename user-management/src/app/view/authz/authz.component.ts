import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-authz',
  templateUrl: './authz.component.html',
  styleUrls: ['./authz.component.css']
})
export class AuthzComponent implements OnInit {


  @Input() role:string;

  display:boolean;

  constructor() { }

  ngOnInit(): void {

    console.log(this.role)
    if(this.role === 'admin'){
      this.display = true;
    }
  }

}
