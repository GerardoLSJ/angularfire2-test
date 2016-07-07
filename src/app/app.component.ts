import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

   items: FirebaseListObservable<any[]>;
   itemObj: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    this.itemObj = af.database.object('/obj');
    console.log(this.itemObj);
  }
  save(newName: string) {
    this.itemObj.set({ name: newName });
  }
  update(newSize: string) {
    this.itemObj.update({ size: newSize });
  }
  delete() {
    this.itemObj.remove();
  }
    
  title = 'app works!';
}


