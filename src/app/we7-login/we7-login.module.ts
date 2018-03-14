import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { We7LoginRoutingModule } from './we7-login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  imports: [
    CommonModule,
    We7LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgetComponent]
})
export class We7LoginModule { }
