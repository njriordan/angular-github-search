import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { AdvancedSearchModel } from '../advanced-search-model';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;
  form: FormGroup;
  formControls = {};

  constructor(
    private gitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.modelKeys.forEach((key) => {
      this.formControls[key] = new FormControl();
    });
    this.form = new FormGroup(this.formControls);
  }

  model = new AdvancedSearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch();
    });
    this.route.data.subscribe( (result) => {
      this.title = result.title;
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

  sendQuery = () => {
    this.searchResults = null;
    const search: string = this.form.value['q'];
    let params = '';
    this.modelKeys.forEach((elem) => {
      if (elem === 'q') {
        return false;
      }
      if (this.form.value[elem]) {
        params += `+${elem}:${this.form.value[elem]}`;
      }
    });
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = `${search}${params}`;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }
}
