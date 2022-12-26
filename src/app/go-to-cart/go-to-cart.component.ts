import { Component, OnChanges, OnInit } from '@angular/core';
import { ItemToCartService } from '../item-to-cart.service';

@Component({
  selector: 'app-go-to-cart',
  templateUrl: './go-to-cart.component.html',
  styleUrls: ['./go-to-cart.component.css']
})
export class GoToCartComponent implements OnInit, OnChanges {

  item: string
  constructor(private _item: ItemToCartService) {
    
  }
  
  ngOnInit(): void {
    // this._item.finalItem.subscribe(item => this.item = item)
    this._item.item.subscribe(item => this.item = item)
  }

  ngOnChanges() {
  }
}
