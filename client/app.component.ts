import { Component } from '@angular/core';
import template from './app.component.html';
import {ProductsListComponent} from "./imports/demo/products-list.component";

@Component({
  selector: 'app',
  template,
  directives: [ProductsListComponent]
})
export class AppComponent {
  constructor() {
  }
}
