import { TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule } from'@angular/common/http/testing';

import { JwtClientService } from './jwt-client.service';

describe('JwtClientService', () => {
  let service: JwtClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JwtClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
});
});
