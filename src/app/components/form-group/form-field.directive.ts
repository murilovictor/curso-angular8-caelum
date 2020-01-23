import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[gmailFormField]'
})
export class FormFieldDirective implements OnInit {

  constructor(private _campo: ElementRef) { }

  ngOnInit() {
    const element = this._campo.nativeElement

    element.id = element.name
    element.setAttribute('placeholder', ' ')

    element.classList.add('mdl-textfield__input')

  }

}
