import { TestBed, inject } from '@angular/core/testing';

import { TrabalhoService } from './trabalho.service';

describe('TrabalhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrabalhoService]
    });
  });

  it('should be created', inject([TrabalhoService], (service: TrabalhoService) => {
    expect(service).toBeTruthy();
  }));
});
