import {MongoObservable} from "angular2-meteor";
import {Product} from "../models/product-object";

export const ProductsCollection = new MongoObservable.Collection<Product>('products');