import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ItemToCartService {

  item = new BehaviorSubject<string>('')
  finalItem = this.item.asObservable()

  constructor() {}

  changeItem(itemRcvd) {
    this.item.next(itemRcvd)
  }
}
