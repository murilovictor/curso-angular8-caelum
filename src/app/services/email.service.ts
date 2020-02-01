import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from 'src/app/models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private api = 'http://localhost:8070/emails'
  private headers = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token') })

  constructor(private httpCliente: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }) {
    const emailDTO = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.httpCliente.post(this.api, emailDTO, { headers: this.headers })
  }

  listar() {
    return this.httpCliente
      .get(this.api, { headers: this.headers })
      .pipe<Email[]>(map(
        (response: any[]) => {
          console.log(response)
          return response.map(
            emailApi => new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.created_at,
              id: emailApi.id
            })
          )
        }
      ))
  }

  deletar(id: string) {
    return this.httpCliente.delete(`${this.api}/${id}`, { headers: this.headers })
  }


  findById(id: string){
    return this.httpCliente.get(`${this.api}/${id}`, { headers: this.headers })
  }
}
