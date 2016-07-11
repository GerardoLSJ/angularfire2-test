import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'login-section',
  template: `
  <div *ngIf="af.auth | async">You are logged in</div>
  <div *ngIf="!(af.auth | async)">Please log in</div>
  <div> {{ (af.auth | async)?.uid }} </div>
  <button (click)="loginGoogle()">Login With google</button>
  <button (click)="overrideLogin()">Login Anonymously</button>
  <button (click)="logOut()">Logout</button>
  `,
})
export class LoginComponent {
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  public email: any;
  public password: any;



  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }

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
  
  logOut(){
    this.af.auth.logout();
  }
  

}