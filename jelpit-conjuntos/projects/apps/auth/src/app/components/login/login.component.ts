import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { loginModel } from "../../interfaces/login-models";
import { ValidationsServices } from '../../services/validations/validation.service';
import { AnaliticsServices } from '../../services/analytics/analytics.service';
import { environment } from '../../../environments/environment';

/**Imports for firebase google Auhtentication */
import { AuthFirebaseService } from '../../services/auth-firebase/auth-firebase.service';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { SocialMediaService } from '../../services/social-media/social-media.service';
import { Router, RouterLink } from '@angular/router';


const createGuest = require('cross-domain-storage/guest');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.scss']
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];
  password!: string;
  email!: string;
  loadingLogin: boolean = false;
  checked: boolean = false;
  showPassword: string = "eye-slash";
  inputPassword: string = "password";
  errorLogin: string = "";
  crossDomainStorage: any;
  // providerFacebook = new FacebookAuthProvider();
  providerGoogle = new GoogleAuthProvider();
  errors: any = {
    errorEmail: "",
    errorPassword: "",
  }
  socialMedia = {
    facebook: false,
    google: false
  }

  constructor(
    private _analiticsService: AnaliticsServices,
    private _authService: AuthService,
    private _validations: ValidationsServices,
    private _authFirebaseService: AuthFirebaseService,
    private _socialMediaService: SocialMediaService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.checkRemember();
    this.getSocialMedia();
  }

  async getSocialMedia() {
    this.socialMedia.facebook = await this._authService.socialMedia("allowFacebookSignUpLogin", "valueBoolean");
    this.socialMedia.google = await this._authService.socialMedia("allowGoogleSignUpLogin", "valueBoolean");
  }

  // Funcion para mostrar o ocultar la contraseña.
  handleShowPassword() {
    if (this.inputPassword === "password") {
      this.inputPassword = "text";
      this.showPassword = "eye";
    } else {
      this.inputPassword = "password";
      this.showPassword = "eye-slash";
    }
  }

  //Funcion para cambiar el valor del check
  handleCheck() {
    this.checked = this.checked ? true : false;
  }

  validateData(field: string) {
    // Validando Email y Password que cumplan con los regex.
    if (field === "email") {
      this.errors.errorEmail = this._validations.validateEmail(this.email) ? "" : "Por favor ingresa un correo electrónico válido.";
    } else {
      this.errors.errorPassword = this._validations.validatePassword(this.password) ? "" : "Por favor ingresa una contraseña válida.";
    }
  }

  //Funcion que verifica si hay un usuario guardado
  checkRemember() {
    try {
      const checkData = JSON.parse(localStorage.getItem("remember") || "");
      this.email = checkData.email;
      this.password = checkData.password;
      this.checked = true;

    } catch (error) {
      //Limpiamos la data por si esta erronea
      localStorage.removeItem("remember");
    }

  }

  setCrossDomain(token: string): void {

    this.crossDomainStorage.set('tokenHerramienta', token, function (error: any, value: any) {

      if (error) {
        //Error de guardado.
      } else {
        window.parent.location = environment.JELPIT_URL_RECAUDO;
      }
    });
  }
  login(){
    this.router.navigate(['/home'])
  }

  //TODO Desacople crossdomain
  //Login con password y contraseña
  // async login() {

  //   //si hay error en los campos no hace login
  //   if (this.errors.errorEmail || this.errors.errorPassword) return;

  //   // Activamos el loading
  //   this.loadingLogin = true;

  //   //Iniciamos la conexion de Cross Domain
  //   this.crossDomainStorage = await createGuest(`${environment.JELPIT_URL_RECAUDO}*`);

  //   //limpiamos la data
  //   this.errorLogin = "";

  //   //Validar que los campos no esten vacios.
  //   if (!this.email) {
  //     this.loadingLogin = false;
  //     return this.errors.errorEmail = "Por favor ingrese campo obligatorio";
  //   }
  //   if (!this.password) {
  //     this.loadingLogin = false;
  //     return this.errors.errorPassword = "Por favor ingrese campo obligatorio";
  //   }

  //   // Encriptar la password.
  //   const private_key: string = environment.JELPIT_PRIVATE_KEY;
  //   const public_key: string = environment.JELPIT_PUBLIC_KEY;
  //   const newPassword: string = await this._authService.getEncryptedObject(this.password, private_key, public_key);

  //   // Creamos la data para enviar al servicio de Login
  //   const loginRequest: loginModel = {
  //     email: this.email,
  //     password: localStorage.getItem("remember") ? this.password : newPassword
  //   }

  //   // si el check esta activado guardar en el localStorage sino, se elimina en caso de que este
  //   if (this.checked) {
  //     localStorage.setItem("remember", JSON.stringify(loginRequest));
  //   } else {
  //     localStorage.removeItem("remember");
  //   }

  //   // Hacemos el llamado a el servicio de login
  //   const result = await this._authService.doLogin(loginRequest)

  //   let labelAnalitics: string = "exitoso"
  //   // si viene un error lo mostramos
  //   if (typeof (result) === "string") {
  //     this.errorLogin = result;
  //     labelAnalitics = "fallido"
  //     localStorage.removeItem("remember");
  //   }

  //   //Tag de Analitica.
  //   this._analiticsService.tagsAnalitics("iniciar sesion", "JCW - login - Ingresar", labelAnalitics)

  //   //desactivamos el loading.
  //   this.loadingLogin = false;

  //   // si el login es fallido, cancelamos el set de crossDomain
  //   if (typeof (result) === "string") return;

  //   //De lo contrario lo guardamos en el localStorage con el Cross Domain
  //   this.setCrossDomain(result.data.transversalLoginUserV2.accessToken)

  //   return;
  // }

  //Incio de sesion con Redes sociales.
  async getConfigProvider(provider: GoogleAuthProvider | FacebookAuthProvider) {
    //Iniciamos la conexion de Cross Domain
    this.crossDomainStorage = await createGuest(`${environment.JELPIT_URL_RECAUDO}*`);
    this.loadingLogin = true;
    this.errorLogin = "";
    this._authFirebaseService.getConfig().subscribe(
      async (data: any) => {
        const firebase: any = await this._socialMediaService.loginWithSocial(data, provider)

        typeof (firebase) !== "string"
          ?
          this.setCrossDomain(firebase.token)
          :
          this.errorLogin = firebase;

        this.loadingLogin = false
      });
  }
}
