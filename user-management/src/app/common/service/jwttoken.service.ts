import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {
  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
      //console.log(this.decodedToken.GivenName)
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getUser() {
    this.decodeToken();
    console.log('get user..' + this.decodedToken?.GivenName);
    return this.decodedToken ? this.decodedToken.GivenName : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime(): string {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = +this.getExpiryTime();
    console.log(expiryTime);
    if (expiryTime) {
       return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
      //return true;
    } else {
      return false;
    }
  }
}
