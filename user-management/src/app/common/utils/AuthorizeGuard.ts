import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SessionStorageService} from '../service/session-storage.service';
import {JWTTokenService} from '../service/jwttoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  constructor(private authStorageService: SessionStorageService,
              private jwtService: JWTTokenService, private router: Router) {
    this.jwtService.setToken(this.authStorageService.get('accessToken'));
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('xxx')
    if (this.jwtService.getUser() && !this.jwtService.isTokenExpired()) {
      return true;
    } else {
      this.router.navigate(['unauthorized']);
    }

  }

}
