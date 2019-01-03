import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitSearch } from '../../models/git-search';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.scss']
})
export class RepositoryDisplayComponent implements OnInit {
  @Input() searchResults: GitSearch;
  @Input() favorites: Array<number>;
  @Output() updateFavorites = new EventEmitter<string>();

  constructor() { }

  toggleFavorite = (item) => {
    return this.updateFavorites.emit(item.id);
  }

  checkFavorite = (item) => {
    return this.favorites.indexOf(item.id) > -1;
  }

  ngOnInit() {
  }

}
