import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteText'
})
export class FavoriteTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return `${value} * Favorite`;
    }
    return value;
  }

}
