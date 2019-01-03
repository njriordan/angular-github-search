import { GitSearch } from './git-search';
import { GitCodeSearch } from './git-code-search';

export interface UnifiedSearch {
  repositories: GitSearch;
  code: GitCodeSearch;
}
