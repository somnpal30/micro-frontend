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
          ,environment.dummyToken);
        resolve();
      }, 100);

    });
  }
}
