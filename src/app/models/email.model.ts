export class Email {
    destinatario: string
    assunto: string
    conteudo: string
    dataDeEnvio: string
    id: string

    constructor({destinatario, assunto, conteudo, dataDeEnvio, id}){
        this.destinatario = destinatario
        this.assunto = assunto
        this.conteudo = conteudo
        this.dataDeEnvio = dataDeEnvio
        this.id = id
    }


    get introducaoDoConteudo(){
        this.conteudo = this.conteudo.replace('\n', '');
        return this.conteudo.length < 140 ? this.conteudo : this.conteudo.substr(0, 140) + '...'
    }


}