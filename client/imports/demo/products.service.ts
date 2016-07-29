import { Injectable } from '@angular/core';
import {ProductsCollection} from "../../../both/collections/products-collection";
import {MeteorObservable} from "angular2-meteor/dist/index";

@Injectable()
export class ProductsService {
  constructor() {}

  public subscribeProducts() {
    return MeteorObservable.subscribe("products");
  }

  public getProducts() {
    return ProductsCollection.find({});
  }
}
