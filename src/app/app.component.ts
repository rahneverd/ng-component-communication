import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: string = ''
  title = 'ng-component-communication';
  itemSelected(item: string) {
    this.selected === item ? this.selected = '' : this.selected = item 
  }
}
