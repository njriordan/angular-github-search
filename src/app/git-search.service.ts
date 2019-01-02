import { GitSearch } from './git-search';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  constructor(private http: HttpClient) {

  }

  gitSearch = (query: string): Observable<GitSearch> => {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    return this.http.get<GitSearch>(url);
  }
}
