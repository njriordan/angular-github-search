import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: GitSearchService = TestBed.get(GitSearchService);
    expect(service).toBeTruthy();
  });
});
