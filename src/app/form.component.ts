import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FirebaseService } from './firebase.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'form-firebase',
    templateUrl: 'form.component.html'
})
export class FormFirebaseComponent {
 
    form: FormGroup; 
    userID: any;
    twitterID = new FormControl("");

    constructor( ){}
    
    submitClick() {
        console.log("model-based form submitted");
        console.log(42);
    }
    

    addNewUser(usr, tw) {/*
       
        this.tweets.push({
            'user-key': usr,
            'tw-key': tw
        })*/
    }

}