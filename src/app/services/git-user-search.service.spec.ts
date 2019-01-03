import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GitUserSearchService } from './git-user-search.service';

describe('GitUserSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: GitUserSearchService = TestBed.get(GitUserSearchService);
    expect(service).toBeTruthy();
  });
});
