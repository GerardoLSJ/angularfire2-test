import { Component } from '@angular/core';
import { FireComponent } from './fire.component';


@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[FireComponent]
})
export class AppComponent {
  title = 'app works!';
  subtitle = 'angularfire2 is the devil'


/*
   items: FirebaseListObservable<any[]>;
   itemObj: FirebaseObjectObservable<any>;
   list: FirebaseListObservable<any[]>;
*/

/*
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));

    this.items = af.database.list('/items');
    this.list = af.database.list('/messages');
    this.itemObj = af.database.object('/obj');
     console.log(this.itemObj); 

    this.tweets = af.database.list('/tweets' , {
      query: {
       limitToLast:7
      }
    }  ); 
  }
*/
  /*
  login() {
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
*/
  
/*
   changeState(key: string, newState: string) {
    
    this.tweets.update(key, {state: newState} );
  }*/ 

 /* save(newName: string) {
    this.itemObj.set({ name: newName });
  }
  update(newSize: string) {
    this.itemObj.update({ size: newSize });
  }
  delete() {
    this.itemObj.remove();
  }*/
/*
  add(newName: string) {
    this.list.push({ text: newName });
  }
  update(key: string, newSize: string) {
    this.list.update(key, { text: newSize });
  }
  deleteItem(key: string) {    
    this.list.remove(key); 
  }
  deleteEverything() {
    this.list.remove();
  }
*/
    


}