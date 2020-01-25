import { FormControl } from '@angular/forms';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {


  textoDaLabel: string = ''
  idDoCampo: string = ''

  @Input() campo = new FormControl();

  constructor(private _elemento: ElementRef) { }

  ngOnInit() {

    //console.log(this.campo)
    const input = this._elemento.nativeElement.querySelector('input')

    this.textoDaLabel = input.name.replace(input.name[0], input.name[0].toUpperCase())
    this.idDoCampo = input.name

    //console.log(input)
  }


}
