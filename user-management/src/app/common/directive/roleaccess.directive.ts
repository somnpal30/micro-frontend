import {Directive, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Directive({
  selector: '[appRoleAccess]'
})
export class RoleAccessDirective implements OnInit {

  @Input() roles: string[];

  @Input() privilege: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(`roles : ${this.roles} - privilege : ${this.privilege} - appName : ${environment.appName}`  );
  }

}
