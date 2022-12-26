import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ItemToCartService {

  // item = new BehaviorSubject<string>('')
  // finalItem = this.item.asObservable()
  // item = new Subject<string>
  item = new EventEmitter<string>()


  constructor() {}

  changeItem(itemRcvd) {
    // this.item.next(itemRcvd)
    // this.item.next(itemRcvd)
    this.item.emit(itemRcvd)
  }
}
