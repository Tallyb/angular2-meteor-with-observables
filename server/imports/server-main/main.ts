import {Product} from "../../../both/models/product-object";
import {ProductsCollection} from "../../../both/collections/products-collection";

export class Main {
  constructor() {
  }

  start():void {
    this.initFakeData();

    Meteor.publish("products", () => {
      return ProductsCollection.getMongoCollection().find({});
    });
  }

  initFakeData():void {
    if (ProductsCollection.getMongoCollection().find({}).count() === 0) {
      ProductsCollection.insert(<Product>{
        name: 'Dotan'
      });

      ProductsCollection.insert(<Product>{
        name: 'Liran'
      });

      ProductsCollection.insert(<Product>{
        name: 'Uri'
      });
    }
  }
}
