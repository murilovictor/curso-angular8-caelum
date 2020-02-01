import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  api = 'http://localhost:8070/login'

  constructor(private httpCliente: HttpClient, private roteador: Router) { }

  logar(login: Login) {
    return this.httpCliente.post(this.api, login);
  }

}
