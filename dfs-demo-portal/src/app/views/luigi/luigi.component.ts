import { Component, OnInit } from '@angular/core';
declare var Luigi: any;
declare var loadLuigi: any;
declare var loadLuigiPostLogin: any;
@Component({
  selector: 'app-luigi',
  templateUrl: './luigi.component.html',
  styleUrls: ['./luigi.component.css']
})
export class LuigiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('loading luigi...')
    //loadLuigi();
    loadLuigiPostLogin();
  }

}
