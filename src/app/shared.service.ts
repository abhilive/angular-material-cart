import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  itemCount: number;
  // Observable string sources
  //private emitChangeSource = new EventEmitter();
  // Observable string streams
  //changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  //emitChange(change: any) {
     // this.emitChangeSource.next(change);
  //}
  add(count: number) {
    alert(count);
    this.itemCount = count;
  }
  constructor() { }
}
