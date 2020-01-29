import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email.model';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  emailEnviados = [];
  private _isNewEmaiilOpen = false


  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  toggleEmail() {
    this._isNewEmaiilOpen = !this._isNewEmaiilOpen
  }

  get isNewEmaiilOpen() {
    return this._isNewEmaiilOpen
  }

  handleEmail(ngForm: NgForm) {
    if (ngForm.invalid) return;


    this.emailService.enviar(this.email).subscribe((response: Email) => {

      console.log('responseEmail: ', response)

      this.email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
      }
  
      ngForm.reset()
  
      this.toggleEmail()

    }, error => console.error(error))
  }

}
