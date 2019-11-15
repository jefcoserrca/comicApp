import { TestBed } from '@angular/core/testing';

import { DataMarvelService } from './data-marvel.service';

describe('DataMarvelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMarvelService = TestBed.get(DataMarvelService);
    expect(service).toBeTruthy();
  });
});
