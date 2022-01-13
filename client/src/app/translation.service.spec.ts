import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';

import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslatePipe],
      imports: [TranslationService],
      providers: [TranslationService]
    });
    service = TestBed.inject(TranslationService);
  });
  

});
