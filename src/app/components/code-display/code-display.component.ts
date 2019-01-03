import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitCodeSearch } from '../../models/git-code-search';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.scss']
})
export class CodeDisplayComponent implements OnInit {
  @Input() searchResults: GitCodeSearch;
  @Input() favorites: Array<number>;
  @Output() updateFavorites = new EventEmitter<string>();

  constructor() { }

  toggleFavorite = (item) => {
    return this.updateFavorites.emit(item.repository.id);
  }

  checkFavorite = (item) => {
    return this.favorites.indexOf(item.repository.id) > -1;
  }

  ngOnInit() {
  }
}
