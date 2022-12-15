import { Injectable } from '@angular/core';

/** @ignore */
declare var dataLayer: any;
@Injectable()
export class AnaliticsServices {

    constructor() { }

    tagsAnalitics(category: string, action: string, label: string) {
        dataLayer.push(
            {
                'event': 'ga_event',
                'category': category, //'iniciar sesion'
                'action': action, //'JCW - login - [facebook|google|ingresar]'
                'label': label //'[exitoso|fallido]'
            }
        )
    }
}
