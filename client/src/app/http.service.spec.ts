import { TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule } from'@angular/common/http/testing';

import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RouterTestingModule],
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
