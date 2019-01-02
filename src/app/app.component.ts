import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUserSearchService } from './git-user-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    GitSearchService,
    GitUserSearchService
  ],
})
export class AppComponent implements OnInit {

  title = 'GitHub Browser';

  constructor(
    private gitSearchService: GitSearchService,
    private gitUserSearchService: GitUserSearchService
  ) { }

  ngOnInit() {
      this.gitSearchService.gitSearch('angular')
        .subscribe((res) => {
          alert(`Total Libraries Found: ${res.total_count}`);
        }, (error) => {
          alert(`Error: ${error.statusText}`);
        });
        this.gitUserSearchService.gitUserSearch('niall')
          .subscribe((res) => {
            alert(`Total Users Found: ${res.total_count}`);
          }, (error) => {
            alert(`Error: ${error.statusText}`);
          });
  }
}
