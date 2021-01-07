import { Injectable } from '@angular/core';
import {LuigiContextServiceImpl} from '@luigi-project/client-support-angular/lib/service/luigi-context.service.impl';

@Injectable({
  providedIn: 'root'
})
export class CustomContextService extends  LuigiContextServiceImpl{

  constructor() {
    super()
  }
}
