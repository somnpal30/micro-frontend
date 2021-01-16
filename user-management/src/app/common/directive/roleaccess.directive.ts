import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {environment} from '../../../environments/environment';

@Directive({
  selector: '[appRoleAccess]'
})
export class RoleAccessDirective implements OnInit {

  @Input() roles: string;

  @Input() privilege: string;

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    console.log(`roles : ${this.roles} - privilege : ${this.privilege} - appName : ${environment.appName}`);

    const display = this.roles === 'Admin';
    if (display) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }


  }

}
