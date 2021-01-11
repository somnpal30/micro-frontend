import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CssloaderService {

  constructor(private http: HttpClient) {
  }

  loadCSS = (): Observable<string> => {
    return this.http.get('./assets/global-styles.css',{ responseType: 'text' });
  };
}
