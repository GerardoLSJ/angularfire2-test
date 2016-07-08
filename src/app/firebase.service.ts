import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';


@Injectable()
export class FirebaseService {

    data: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire) {
        this.data = af.database.list('/tweets');
    }

    getTweets(){
        return this.data;
    }
    

}