import { Pipe, PipeTransform } from '@angular/core';
import { Songs } from '../Songs';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: Songs[], searchText: string): Songs[] {
    if(!items){
      return [];
    }
    if(!searchText){
      return items
    }
    searchText=searchText.toLocaleLowerCase();
    return items.filter(it=>{
      return it.musicName.toLocaleLowerCase().includes(searchText);
    });
  }

}
