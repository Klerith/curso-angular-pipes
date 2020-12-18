import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform( valor: boolean ): string {
        return ( valor ) 
            ? 'vuela'
            : 'no vuela';
    }

}