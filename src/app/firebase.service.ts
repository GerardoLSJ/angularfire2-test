import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';


@Injectable()
export class FirebaseService {

    data: FirebaseListObservable<any[]>;
    users: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire) {
        this.data = af.database.list('/tweets');
        //this.users = af.database.object('/users');

        this.users = af.database.list('/tweets', {
            query: {
                orderByChild: 'user-key',
                equalTo: "contenterasdasdasdasdds gfjfkjfkda "
            }
        });


    }

    getTweets(){
        return this.data;
    }
    
    getUser() {
        return this.users;
    }
    save() {
       return  this.users;
    }

}