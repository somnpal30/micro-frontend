import {Component, OnInit} from '@angular/core';
import {RemoteDataService} from "../../service/remote-data.service";
import {Module, ModuleAndServices} from "../../model/moduleAndServices";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public moduleAndServiceCol: ModuleAndServices | undefined;
  public modules: Module[] = [];
  countries: Country[];
  selectedCountry: Country | undefined;
  searchText:string|undefined

  constructor(private remoteService: RemoteDataService) {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];

  }

  ngOnInit(): void {
    this.remoteService.loadModuleAndServiceDetails().subscribe(resp => {
      this.moduleAndServiceCol = resp;
      this.modules = this.moduleAndServiceCol.modules;
      console.log(this.modules);
    }, error => {
    })
  }

}

interface Country {
  name: string,
  code: string
}
