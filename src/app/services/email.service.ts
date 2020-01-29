import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private api = 'http://localhost:8070/emails'
  private headers = new HttpHeaders({'Authorization': localStorage.getItem('cmail-token')})

  constructor(private httpCliente: HttpClient) { }

  enviar({destinatario, assunto, conteudo}) {
    const emailDTO = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.httpCliente.post(this.api, emailDTO, {headers: this.headers})
  }


}
