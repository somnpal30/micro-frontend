import { TestBed } from '@angular/core/testing';

import { CustomContextService } from './custom-context.service';

describe('CustomContextService', () => {
  let service: CustomContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
