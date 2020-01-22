import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
  emailEnviados = [];
  private _isNewEmaiilOpen = false


  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  toggleEmail(){
    this._isNewEmaiilOpen = !this._isNewEmaiilOpen
  }

  get isNewEmaiilOpen(){
    return this._isNewEmaiilOpen
  }

  handleEmail(ngForm: NgForm){
    if(ngForm.invalid) return;

    this.emailEnviados.push(this.email)
    console.log(this.emailEnviados)
    
    
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    ngForm.reset()

    this.toggleEmail()
  }

}
