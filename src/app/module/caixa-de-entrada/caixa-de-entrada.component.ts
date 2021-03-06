import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {
  emailEnviados = [];
  valorParaFiltrar = ''

  constructor(private emailService: EmailService,
    private pageService: PageService,
    private headerService: HeaderService) {

  }

  ngOnInit() {
    this.pageService.defineTitulo('Caixa de Entrada - CMail')
    this.carregarTodosEmails()
    this.headerService.valorDoInputSubject
      .subscribe(valorDoFiltro => this.valorParaFiltrar = valorDoFiltro)

  }

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


    this.emailService.enviar(this.email)
      .subscribe((response: any) => {

        this.carregarTodosEmails()
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

  handlerRemoveEmail(id: string) {
    console.log('handler: ', id)
    this.emailService.deletar(id)
      .subscribe(response => {
        console.log('Excluido com sucesso', response)
        this.removerEmailDaLista(id)
      }, error => console.error('Erro ao Deletar o Email'))
  }

  removerEmailDaLista(id: string) {
    this.emailEnviados = this.emailEnviados.filter(email => email.id != id)
  }

  carregarTodosEmails() {
    this.emailService.listar()
      .subscribe((response: any) => {
        this.emailEnviados = response
        console.log(this.emailEnviados)
      },
        error => console.error('Erro ao Buscar Emails: ', error))
  }

  filtrarEmails() {
    const valorParaFiltrarMinusculo = this.valorParaFiltrar.toLowerCase()

    return this.emailEnviados.filter(email => {
      const assuntoMinusculo = email.assunto.toLowerCase()
      return assuntoMinusculo.includes(valorParaFiltrarMinusculo)
    })
  }

}
