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
/*@HostListener('click', ['$event']) onClick(e) {


}*/

export class FireComponent  {

   // data: FirebaseListObservable<any[]>;

    constructor( private firebaseService: FirebaseService) { }
    
    tweets = this.firebaseService.getTweets();

    changeState(key: string, newState: string) {
         this.tweets.update(key, {state: newState} );
  }
    /*

       @HostListener('click', ['$event'])
        onClick(e) {
            console.log(e.target)
        } 
        
        */



}

