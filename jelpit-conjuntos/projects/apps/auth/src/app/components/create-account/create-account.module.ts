import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProfileButtonComponent } from '../profile-button/profile-button.component'
import { RouterModule } from '@angular/router';
import { CreateAccountRoutingModule } from './create-account-routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        CardModule,
        CreateAccountRoutingModule
    ],
    declarations: [CreateAccountComponent, ProfileButtonComponent]
})
export class CreateAccountModule { }
