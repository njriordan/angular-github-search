import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { GitCodeSearch } from '../models/git-code-search';

@Injectable({
  providedIn: 'root'
})
export class GitCodeSearchService {
  cachedValue: string;
  search: Observable<GitCodeSearch>;
  constructor(private http: HttpClient) {

  }

  codeSearch: Function = (query: string): Observable<GitCodeSearch> => {
    if (query.indexOf('user') <= -1) {
      query = `${query}+user:angular`;
    }
    if (!this.search) {
      const url = `https://api.github.com/search/code?q=${query}`;
      this.search = this.http.get<GitCodeSearch>(url)
        .pipe(
          publishReplay(1),
          refCount()
        );
      this.cachedValue = query;
    } else if (this.cachedValue !== query) {
      this.search = null;
      this.codeSearch(query);
    }
    return this.search;
  }
}
