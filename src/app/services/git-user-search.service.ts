import { GitUserSearch } from '../models/git-user-search';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitUserSearchService {

  constructor(private http: HttpClient) {

  }

  gitUserSearch = (query: string): Observable<GitUserSearch> => {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    return this.http.get<GitUserSearch>(url);
  }
}
