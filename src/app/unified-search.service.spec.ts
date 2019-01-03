import { TestBed } from '@angular/core/testing';

import { UnifiedSearchService } from './unified-search.service';

describe('UnifiedSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnifiedSearchService = TestBed.get(UnifiedSearchService);
    expect(service).toBeTruthy();
  });
});
