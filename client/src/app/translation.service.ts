import { Injectable } from '@angular/core';


export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}

@Injectable()
export class TranslationService {

    public languages = ['ger', 'eng'];

    public language = 'eng';

    private dictionary: {[key: string]: TranslationSet} = {
        'ger' : {
            languange: 'ger',
            values: {
                'example' : 'Beispiel',
                'marketplace' : 'Marketplatz',
                'list' : 'Aufführen' ,
                'register' : 'Registrieren',
                'login' : 'Anmeldung',
                'profile' : 'Profil'
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'example' : 'Example',
                'marketplace' : 'Marketplace',
                'list' : 'List' ,
                'register' : 'Register',
                'profile' : 'Profile',
                'login' : 'Login'
            }
        }
    };

    constructor() { }

    translate(value: string): string {
        console.log('translate called with value ' + value + ' and language ' + this.language);
        if ( this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[value];
        }
    }
}
