import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customEtudiantName'
})
export class CustomEtudiantNamePipe implements PipeTransform {

  transform(index): any {
    return 'Etudiant num °'+ ( index + 1 )  ;
  }

}
