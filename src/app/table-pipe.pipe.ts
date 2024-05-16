import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe',
  standalone: true
})
export class TablePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'id':
        return 'Id';
      case 'firstName':
        return 'İsim';
      case 'lastName':
        return 'Soyisim';
      case 'age':
        return 'Yaş';
      case 'gender':
        return 'Cinsiyet';
      case 'email':
        return 'Mail';
      case 'phone':
        return 'Telefon';
      case 'company':
        return 'Şirket Adı';
      default:
        return '';
    }
  }

}
