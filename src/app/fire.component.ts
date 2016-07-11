import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseService } from './firebase.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';




@Component({
    moduleId: module.id,
    selector: 'tweets-section',
    templateUrl: 'fire.component.html',
    styleUrls: ['app.component.css'],
    providers: [FirebaseService]
})
export class FireComponent  {

    constructor(
        private firebaseService: FirebaseService,
        public af: AngularFire
    ) {
        this.af.auth.subscribe(auth => console.log(auth));
    }
  
    tweets = this.firebaseService.getTweets();
    users = this.firebaseService.getUser();

    changeState(key: string, newState: string) {
        this.tweets.update(key, { state: newState });
    }







}

