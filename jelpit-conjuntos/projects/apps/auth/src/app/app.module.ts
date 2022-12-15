import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';

//

import { SharedModule, MessageService, ConfirmationService } from 'primeng/api';
import { LocalStorageService } from './services/local-storage/local.storage.service';
import { AuthService } from './services/auth/auth.service';

//Prime
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ValidationsServices } from './services/validations/validation.service';
import { AnaliticsServices } from './services/analytics/analytics.service';
import { CreateAccountModule } from './components/create-account/create-account.module';
import { PasswordRecoveryModule } from './components/password-recovery/password-recovery.module';
import { AuthFirebaseService } from './services/auth-firebase/auth-firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialMediaService } from './services/social-media/social-media.service';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    CardModule,
    CreateAccountModule,
    PasswordRecoveryModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    LocalStorageService,
    AuthService,
    ValidationsServices,
    AnaliticsServices,
    AuthFirebaseService,
    SocialMediaService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
