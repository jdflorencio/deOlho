import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counterCharactersPipe',
})
export class CounterCharactersPipePipe implements PipeTransform {
  transform(value: string): number {
    return value ? value.length : 0;
  }
}
