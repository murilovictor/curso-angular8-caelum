import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  valorDoInputSubject = new Subject<string>();

  constructor() { }

  atribuirValorAoSubjectService(valorDoInputString: string) {
    this.valorDoInputSubject.next(valorDoInputString)
  }

}
