import { TestBed } from '@angular/core/testing';

import { Nhl66Service } from './nhl66.service';

describe('Nhl66Service', () => {
  let service: Nhl66Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nhl66Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
