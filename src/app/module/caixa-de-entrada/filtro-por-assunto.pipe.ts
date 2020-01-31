import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/email.model';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssuntoPipe implements PipeTransform {

  transform(listaDeEmails: Email[], textoFiltro: string): any {
    return listaDeEmails
      .filter(email => email.assunto.toLowerCase().includes(textoFiltro.toLowerCase()));
  }

}
