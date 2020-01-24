import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  teste: number = 5;

  
  constructor() { }
  
  ngOnInit() {
  }


  handleCadastroUsuario() {
    console.log(this.formCadastro)
    if (this.formCadastro.valid) {
      this.formCadastro.reset()
      console.log(this.formCadastro.value)
    } else {
      console.log('campos invalidos')
      this.validarTodosCamposFormulario()
    }
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(this.teste)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('')
  })


  validarTodosCamposFormulario(){
      console.log(this.formCadastro)
      const camposForm = this.formCadastro.controls
      this.formCadastro.markAllAsTouched();



  }

}
