import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    private _httpClientService: HttpClient
  ) { }

  getConfig() {
    return this._httpClientService.post(environment.JELPIT_URL_FIREBASE,null)
  }

  initApp(firebaseConfig: any){
    return initializeApp(firebaseConfig);
  }
}
