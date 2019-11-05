import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMoy'
})
export class CustomMoyPipe implements PipeTransform {

  transform(moy): any {
    var msg ;
    switch(true) {
      case moy > 16: msg = 'Mention Tres Bien' ; break ;
      case moy > 14: msg = 'Mention Bien' ; break ;
      case moy > 12: msg = 'Mention Assez Bien' ; break ;
      case moy > 10: msg = 'Mention Passable' ; break ;
      default: msg = 'Redoublant' ; break ;
    }
    return  ` ${moy} : ${msg} ` ;
  }

}
