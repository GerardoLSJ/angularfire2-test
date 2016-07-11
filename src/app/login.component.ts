import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './firebase.service';

@Component({
  moduleId: module.id,
  selector: 'login-section',
  template: `

  <div *ngIf="af.auth | async">
      <div> {{ (af.auth | async)?.uid }} </div>
     <button (click)="logOut()">Logout</button>
  </div>
  <div *ngIf="!(af.auth | async)">
     <button (click)="loginGoogle()">Login With google</button>
     <button (click)="overrideLogin()">Login Anonymously</button>
  </div>
  `,
})
export class LoginComponent {
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log());
  }
  public email: any;
  public password: any;
  //userUID:any = this.af.auth;  

  loginGoogle(user:any) {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
    //this.save(this.userUID.uid);
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }
  logOut(){
    this.af.auth.logout();
  }
   /*
    
    user = this.firebaseService.setUser();
  
    save(newUser: string) {
    this.user.set({ 
      $key: newUser 
    });

  }
*/


/*
  // Email and password
  emailLogin(email:any , password:any) {
    this.af.auth.login({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    })
  }
  emailLogin2(email:any , password:any){
    this.af.auth.login({ 
      email: 'gerry@gerry.com',
      password: 'qwerty' 
    });
  }
*/



}