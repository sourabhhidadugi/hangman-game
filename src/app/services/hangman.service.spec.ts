import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HangmanService } from './hangman.service';

describe('HangmanService', () => {
  let service: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HangmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
