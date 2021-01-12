import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionStorageService} from '../service/session-storage.service';

@Injectable()
export class TokenInterceptor  implements HttpInterceptor{

  constructor(private sessionStorage : SessionStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sessionStorage.get('accessToken');
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);

  }

}
