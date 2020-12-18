import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderPor: string = 'sin valor' ): Heroe[] {

    switch( orderPor ) {

      case 'nombre': 
        return heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
      
      case 'vuela':
        return heroes.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 );

      case 'color':
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;
    }


    // if( orderPor === 'sin valor' ) {
    //   return heroes;
    // } else {
    //   heroes = heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
    // }

    // return heroes;
  }

}
