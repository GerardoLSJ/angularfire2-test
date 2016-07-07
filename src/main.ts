import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';
if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyBglznyGleAZP1rHiIu3b9J3GK7cfThnsI",
    authDomain: "ngfire-dee74.firebaseapp.com",
    databaseURL: "https://ngfire-dee74.firebaseio.com",
    storageBucket: "ngfire-dee74.appspot.com",
  }),
    firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  })
]);

