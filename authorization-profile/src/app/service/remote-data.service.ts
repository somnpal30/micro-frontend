import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Workspace} from "../model/workspace";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private httpClient: HttpClient) {
  }

  loadWorkspace(): Observable<Workspace> {
    return this.httpClient.get<Workspace>("/assets/data/workspace.json")
  }
}
