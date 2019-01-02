import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GitSearchService],
})
export class AppComponent implements OnInit {

  title = 'GitHub Browser';

  constructor(private gitSearchService: GitSearchService) {

  }

  ngOnInit() {
      this.gitSearchService.gitSearch('angular')
        .subscribe((res) => {
          alert(`Total Libraries Found: ${res.total_count}`);
        }, (error) => {
          alert(`Error: ${error.statusText}`);
        });
  }
}
