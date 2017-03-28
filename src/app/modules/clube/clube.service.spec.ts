import { TestBed, inject } from '@angular/core/testing';

import { ClubeService } from './clube.service';

describe('PageOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubeService]
    });
  });

  it('should ...', inject([ClubeService], (service:ClubeService) => {
    expect(service).toBeTruthy();
  }));
});
