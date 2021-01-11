import { TestBed } from '@angular/core/testing';

import { CssloaderService } from './cssloader.service';

describe('CssloaderService', () => {
  let service: CssloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
