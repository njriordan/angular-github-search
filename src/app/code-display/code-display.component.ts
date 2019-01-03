import { Component, OnInit, Input } from '@angular/core';
import { GitCodeSearch } from '../git-code-search';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.scss']
})
export class CodeDisplayComponent implements OnInit {
  @Input() searchResults: GitCodeSearch;

  constructor() { }

  ngOnInit() {
  }

}
