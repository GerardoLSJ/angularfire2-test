import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
/*
   items: FirebaseListObservable<any[]>;
   itemObj: FirebaseObjectObservable<any>;
   list: FirebaseListObservable<any[]>;
*/
   tweets: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
/*
    this.items = af.database.list('/items');
    this.list = af.database.list('/messages');
    this.itemObj = af.database.object('/obj');
     console.log(this.itemObj); 
*/
    this.tweets = af.database.list('/tweets');
  }

   changeState(key: string, newState: string) {
    
    this.tweets.update(key, {state: newState} );
  }

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
    
  title = 'app works!';
  subtitle = 'angularfire2 is the devil'
}


