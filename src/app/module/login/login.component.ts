import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private httpClient: HttpClient, private roteador: Router) { }
  
  ngOnInit() {
  }

  urlLogin: string = 'http://localhost:8070/login'
  
  formCadastro = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  logar() {

    console.log(this.formCadastro.value)

    this.httpClient.post(this.urlLogin, this.formCadastro.value)
      .subscribe((response: Login) => {
        console.log(response.token)

        localStorage.setItem('cmail-token', response.token)

        setTimeout(()=> {
          this.roteador.navigate(['/inbox'])
        }, 1000)

      }, 
      (error: HttpErrorResponse) => {
        const msgError = error.error.message
        console.error(error)
        alert(msgError)
      })

  }


}

interface Login {
  email: string,
  password: string,
  token: string
}
