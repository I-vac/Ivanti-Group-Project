import{ HttpClientTestingModule } from'@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TranslationService]
    });
    service = TestBed.inject(TranslatePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
