import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Workspace} from "../model/workspace";
import {Observable} from "rxjs";
import {AuthorizationProfileList} from "../model/authorizationProfileList";

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private httpClient: HttpClient) {
  }

  loadWorkspace(): Observable<Workspace> {
    return this.httpClient.get<Workspace>("/assets/data/workspace.json")
  }

  loadAuthorizationProfileList(): Observable<AuthorizationProfileList> {
    return this.httpClient.get<AuthorizationProfileList>("/assets/data/view-auth-profile-list.json")
  }
}
