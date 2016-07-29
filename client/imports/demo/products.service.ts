import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../both/models/product-object";
import {ProductsCollection} from "../../../both/collections/products-collection";
import {MeteorObservable} from "angular2-meteor/dist/index";

@Injectable()
export class ProductsService {
  private data : Observable<Array<Product>>;

  constructor() {
    this.data = ProductsCollection.find({});
    MeteorObservable.subscribe("products").subscribe();
  }

  public getData() : Observable<Product[]> {
    return this.data;
  }
}
