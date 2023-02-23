import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'mayuscula'
})

export class MayusculaPipe implements PipeTransform{
  transform(value: string, enMayuscula: boolean=true):string {
    if (enMayuscula) {
      return value.toUpperCase();
    }
    else {
      return value.toLowerCase();
    }
  }
}
