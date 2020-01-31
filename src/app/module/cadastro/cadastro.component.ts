import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators'

import { UserModel } from 'src/app/models/user.model'
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  minNome: number = 5
  regexTelefone: string = '[0-9]{4}-?[0-9]{4}[0-9]?'
  mensagemErro = ''


  constructor(private httpClient: HttpClient, 
              private roteador: Router,
              private pageService: PageService) { }

  ngOnInit() {
    this.pageService.defineTitulo('Cadastro de Usuários')
  }


  handleCadastroUsuario() {
    if (this.formCadastro.valid) {
      const userData = new UserModel(this.formCadastro.value)

      this.httpClient
          .post('http://localhost:8070/users', userData)
          .subscribe((resp) => {
            console.log(resp)

            setTimeout(()=> {
              this.roteador.navigate([''])
            }, 1000)

          },
          (erro: HttpErrorResponse) => {
            console.error(erro)
            this.mensagemErro = erro.error.body
          });


      this.formCadastro.reset()
      //console.log(this.formCadastro.value)
    } else {
      //console.log('campos invalidos')
      this.validarTodosCamposFormulario()
    }
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(this.minNome)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern(this.regexTelefone)]),
    avatar: new FormControl('', [Validators.required] ,[this.validaImagem.bind(this)])
  })


  validaImagem(campoFormulario: FormControl) {
    return this.httpClient
      .head(campoFormulario.value, { observe: 'response' })
      .pipe(map((response: HttpResponseBase) => {
        console.log('Imagem consultada: ', response)
        return response.ok ? null : { urlInvalida: true }
      }), catchError((error) => {
        console.error('Imagem Inválida: ', error)
        return [{ urlInvalida: true }]
      }))
  }


  validarTodosCamposFormulario() {
    //console.log(this.formCadastro)
    const camposForm = this.formCadastro.controls
    this.formCadastro.markAllAsTouched();
  }




}
