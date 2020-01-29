export class Email {
    to: string
    subject: string
    content: string

    constructor({destinatario, assunto, conteudo}){
        this.to = destinatario
        this.subject = assunto
        this.content = conteudo
    }


}