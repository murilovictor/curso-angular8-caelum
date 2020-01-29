import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SheredModule } from 'src/app/components/shered.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from 'src/app/services/login-service.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SheredModule,
    LoginRoutingModule
  ],
  providers:[
    LoginServiceService
  ]
})
export class LoginModule { }
