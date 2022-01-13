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
                'home' : 'Heim',
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
                'home' : 'Home',
                'list' : 'List' ,
                'register' : 'Register',
                'login' : 'Login',
                'profile' : 'Profile'
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
