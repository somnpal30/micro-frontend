import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';
import {CssloaderService} from './common/service/cssloader.service';


// @ts-ignore
@Injectable()
export class AppInitService {

  constructor(@Inject(DOCUMENT) private document, private cssloaderService: CssloaderService) {
  }

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');

      this.cssloaderService.loadRoles().subscribe(
        result => {
          // sessionStorage.setItem('roles',result);
          result.modules.forEach(module => {
            // console.log(module.name.replace(/\s/g, "")  );
            module.privileges.forEach(privilege => {
              const moduleName = module.name.replace(/\s/g, '_').toUpperCase();
              /*  if (privilege.attributes) {
                  sessionStorage.setItem(`${moduleName}.${privilege.code.toUpperCase()}`, JSON.stringify(privilege.attributes));
                } else {
                  sessionStorage.setItem(`${moduleName}.${privilege.code.toUpperCase()}`, 'true');
                }*/
              sessionStorage.setItem(moduleName, JSON.stringify( module.privileges));
            });
          });


          // console.log(result.modules[2].name);
        },
        error => {
        }
      );


      setTimeout(() => {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = 'cssId';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        //link.href = environment.cssStyle;
        link.href = '/assets/global-styles.css';
        link.media = 'all';
        head.appendChild(link);
        console.log('AppInitService Finished');
        //console.log(sessionStorage.getItem("accessToken"));
        sessionStorage.setItem('accessToken'
          , environment.dummyToken);
        resolve();
      }, 100);

    });
  }
}
