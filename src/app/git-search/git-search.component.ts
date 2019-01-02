import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;

  constructor(private gitSearchService: GitSearchService) { }

  ngOnInit() {
    this.gitSearchService.gitSearch('angular')
    .subscribe((res) => {
      this.searchResults = res;
    }, (error) => {
      alert(`Error: ${error.statusText}`);
    });
  }

  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery)
    .subscribe((res) => {
      this.searchResults = res;
    }, (error) => {
      alert(`Error: ${error.statusText}`);
    });
  }

}
