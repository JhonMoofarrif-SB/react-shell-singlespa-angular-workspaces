import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthFirebaseService } from '../../services/auth-firebase/auth-firebase.service';
import { AuthService } from '../../services/auth/auth.service';
/**Imports for firebase google Auhtentication */
import { Buffer } from 'buffer';
import { signInWithPopup, getAuth, GoogleAuthProvider, FacebookAuthProvider, ProviderId } from "firebase/auth";
import { Subscription } from 'rxjs';

@Injectable()
export class SocialMediaService {
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
  firebasePopup = new Subscription
  constructor(
    private _authFirebaseService: AuthFirebaseService,
    private _authService: AuthService
  ) {
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
  /**auth with firebase google and facebook */
  async loginWithSocial(data: any, provider: GoogleAuthProvider | FacebookAuthProvider) {

    let dataDecode = JSON.parse(String.fromCharCode(...Buffer.from(data.result, 'base64')));

    this._authFirebaseService.initApp(dataDecode.firebaseConfig)
    const auth = getAuth();

    return await signInWithPopup(auth, provider)
      .then(
        async (result: any) => {
          const token = result.user.accessToken;
          // se verifica que el usuario exista con la misma red social
          const getuser = await this._authService.getUser({ email: result.user.email || "", social_media: result.providerId?.split(".")[0] || "" })
          // si da error se muestra
          if (typeof (getuser) === "string") {
            return getuser;
          }
          // Generate token firebase.
          return { token: token }
        }).catch((error) => {
          console.log("Error Google", error)
          return error
        });
  }
}


