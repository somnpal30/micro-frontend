import {Component, OnInit} from '@angular/core';
import {RemoteDataService} from "../../service/remote-data.service";
import {Module, ModuleAndServices, Privilege} from "../../model/moduleAndServices";
import {Channel} from "../../model/serviceDetails";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public moduleAndServiceCol: ModuleAndServices | any;
  public modules: Module[] = [];
  public privileges: Privilege[];
  public channels: Channel[];
  selectedModule: Module | any;
  selectedPrivilege: Privilege | any;

  constructor(private remoteService: RemoteDataService) {
    this.privileges = [];
    this.channels = [];

  }

  ngOnInit(): void {
    this.remoteService.loadModuleAndServiceDetails().subscribe(resp => {
      this.moduleAndServiceCol = resp;
      this.modules = this.moduleAndServiceCol.modules;
    }, error => {
    })
  }

  displayService() {
    this.privileges = this.selectedModule.privileges
  }

  displayServiceDetails() {
    if (this.channels.length === 0) {
      this.remoteService.loadChannel().subscribe(resp => {
        this.channels = resp.channels;

      })
    }

  }
}


