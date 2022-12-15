import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    setItem(token:string, item:string) {
        localStorage.setItem(token, item);
    }


    get(token: string): any {
        return localStorage.getItem(token)
    }

    getToken() {
        return localStorage.getItem('token');
    }
    setToken(user:string) {
        localStorage.setItem('token', user);
    }

    removeItem(token: string) {
        localStorage.removeItem(token)
        // console.log('removiendo ',token)
    }

    removeAll() {
        localStorage.clear();
    }
}
