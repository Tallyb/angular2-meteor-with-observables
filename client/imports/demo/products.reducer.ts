import {ActionReducer, Action} from "@ngrx/store";
import {ProductsActions} from "./products.actions";
import {Product} from "../../../both/models/product-object";
import {Observable} from "rxjs";

export interface ProductsState {
  products: Observable<Product>;
}

export const productsReducer : ActionReducer<ProductsState> = (state : ProductsState, action : Action) => {
    switch (action.type) {
      case ProductsActions.PRODUCTS_COLLECTION_UPDATED: {
        return Object.assign({}, state, { products: action.payload });
      }

      default:
        return state;
    }
};