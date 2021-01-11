import {Inject, Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CssloaderService} from './common/service/cssloader.service';
import {DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';

// @ts-ignore
@Injectable()
export class AppInitService {

  constructor(@Inject(DOCUMENT) private document,
              public sanitizer: DomSanitizer,
              private cssLoaderService: CssloaderService) {
  }

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');

      setTimeout(() => {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = "cssId";
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = environment.cssStyle;
        link.media = 'all';
        head.appendChild(link);
        console.log('AppInitService Finished');
        resolve();
      }, 100);

    });
  }
}
