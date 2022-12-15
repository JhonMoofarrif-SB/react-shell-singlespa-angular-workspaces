import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import {MessageModule} from 'primeng/message';
import { RouterModule } from '@angular/router';
import { CreateAccountModule } from '../create-account/create-account.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    CardModule,
    MessageModule,
    PasswordModule,
    CreateAccountModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
