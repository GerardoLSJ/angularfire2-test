import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { FirebaseService } from './firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'form-firebase',
    templateUrl: 'form.component.html',
    providers: [FirebaseService]     //IMPORTANT 
})
export class FormFirebaseComponent {
 

    form: FormGroup; 
    userID: any ;
    twitterID: any;
    pushTweets = this.fb.getTweets();
    userKey:any;
    clickEvent = 0;


    constructor(
        private fb: FirebaseService,
        public af: AngularFire
    ){
     this.af.auth.subscribe(auth => this.userID = auth.uid);       
    }
    
    
 
    submitClick(userID,twitterID) {
        console.log(userID +" "+ twitterID );
        this.addNewUser(userID, twitterID);
        console.log("PASSED");
    }
    

    addNewUser(userID, twitterID) {
       
        this.pushTweets.push({
            'userKey': userID,
            'twKey':twitterID
        })
    }
    getClick(userKey){
        this.pushTweets = this.af.database.list('/tweets', {
            query: {
                orderByChild: 'userKey',
                equalTo: userKey
            }
        });
        this.clickEvent++;
        
    }

}