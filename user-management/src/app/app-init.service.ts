import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';

// @ts-ignore
@Injectable()
export class AppInitService {

  constructor(@Inject(DOCUMENT) private document) {
  }

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');

      setTimeout(() => {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = 'cssId';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        //link.href = environment.cssStyle;
        link.href ="/assets/global-styles.css"
        link.media = 'all';
        head.appendChild(link);
        console.log('AppInitService Finished');
        //console.log(sessionStorage.getItem("accessToken"));
        sessionStorage.setItem('accessToken'
          ,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTA0NTU3ODksImV4cCI6MTY0MTk5MTc4OSwiYXVkIjoid3d3LmNvbXZpdmEuY29tIiwic3ViIjoic29tbmF0aC5wYWwxQGNvbXZpdmEuY29tIiwiR2l2ZW5OYW1lIjoiSm9obm55IiwiU3VybmFtZSI6IlJvY2tldCIsIkVtYWlsIjoianJvY2tldEBleGFtcGxlLmNvbSIsIlJvbGUiOlsiTWFuYWdlciIsIlByb2plY3QgQWRtaW5pc3RyYXRvciJdfQ.2CmNK2_l5qQFrPWtDH6d0g0UUyIcmBfIlzYUchlpPno');
        resolve();
      }, 100);

    });
  }
}
