import { TestBed } from '@angular/core/testing';

import { GitCodeSearchService } from './git-code-search.service';

describe('GitCodeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitCodeSearchService = TestBed.get(GitCodeSearchService);
    expect(service).toBeTruthy();
  });
});
