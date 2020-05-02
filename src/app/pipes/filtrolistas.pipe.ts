import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtrolistas',
  pure: false
})
export class FiltrolistasPipe implements PipeTransform {

  transform( listas: Lista[], pendiente: boolean = true): Lista[] {
    return listas.filter( lista => lista.terminada !== pendiente);
  }

}
