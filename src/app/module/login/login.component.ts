import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginServiceService, private roteador: Router) { }

  ngOnInit() {
  }

  urlLogin: string = 'http://localhost:8070/login'
  mensagemError = ''

  formCadastro = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  logar() {

    console.log(this.formCadastro)

    this.loginService.logar(this.formCadastro.value)
      .subscribe((response: Login) => {
        console.log(response.token)

        localStorage.setItem('cmail-token', response.token)
        this.roteador.navigate(['/inbox'])

      },
        (error: HttpErrorResponse) => {
          this.mensagemError = error.error.message
          console.error(error)
        })

  }


}