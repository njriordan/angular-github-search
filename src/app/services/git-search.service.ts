import { GitSearch } from '../models/git-search';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  search: Observable<GitSearch>;
  cachedValue: string;
  constructor(private http: HttpClient) {

  }

  gitSearch: Function = (query: string): Observable<GitSearch> => {
    if (!this.search) {
      const url = `https://api.github.com/search/repositories?q=${query}`;
      this.search = this.http.get<GitSearch>(url)
        .pipe(
          publishReplay(1),
          refCount()
        );
      this.cachedValue = query;
    } else if (this.cachedValue !== query) {
      this.search = null;
      this.gitSearch(query);
    }
    return this.search;
  }
}
