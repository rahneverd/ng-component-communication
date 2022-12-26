import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemToCartService } from '../item-to-cart.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() item : string
  @Output() itemAdded = new EventEmitter() 
  constructor(private _item : ItemToCartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this._item.changeItem(this.item)
    this.itemAdded.emit()
  }

}
