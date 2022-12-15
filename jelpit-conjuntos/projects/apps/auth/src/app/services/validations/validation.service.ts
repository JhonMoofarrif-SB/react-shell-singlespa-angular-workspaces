import { Injectable } from '@angular/core';


@Injectable()
export class ValidationsServices {

    constructor() { }

    validateEmail(email: string) {
        if (RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
            return true;
        } else {
            return false;
        }
    }

    validatePassword(password: string) {
        if (RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password)) {
            return true;
        } else {
            return false;
        }
    }
}
