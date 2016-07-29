import{ Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import template from './products-list.component.html';
import {ProductsService} from "./products.service";

@Component({
  selector: 'products',
  template,
  providers: [ProductsService]
})
export class ProductsListComponent extends MeteorComponent {
  constructor(private products : ProductsService) {
    super();
  }

  getData() {
    return this.products.getData();
  }
}
