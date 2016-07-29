import{ Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import template from './products-list.component.html';
import {ProductsService} from "./products.service";
import {Product} from "../../../both/models/product-object";
import {ProductsState} from "./products.reducer";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ProductsActions} from "./products.actions";
import {OnInit, OnDestroy} from "@angular/core";

@Component({
  selector: 'products',
  template,
  providers: [ProductsService]
})
export class ProductsListComponent extends MeteorComponent implements OnInit, OnDestroy {
  private products : Observable<Product>;

  constructor(public _store : Store<ProductsState>) {
    super();

    this.products = this._store.select("products");
    console.log(this.products);
  }

  ngOnInit() {
    this._store.dispatch({ type: ProductsActions.CALL_SUBSCRIBE_PRODUCTS });
  }

  ngOnDestroy() {
    this._store.dispatch({ type: ProductsActions.CALL_UNSUBSCRIBE_PRODUCTS });
  }

  add() {
    let product = <Product>{
      name: "Test new"
    };

    this._store.dispatch({
      type: ProductsActions.ADD_PRODUCTS,
      payload: product
    });
  }
}
