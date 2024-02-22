import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing-module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
