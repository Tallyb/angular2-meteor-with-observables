import {ProductsState} from "./products.reducer";
import {StateUpdates, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {ProductsService} from "./products.service";
import {ProductsActions} from "./products.actions";

@Injectable()
export class ProductsEffects {
  constructor(private updates$:StateUpdates<ProductsState>, private productsService:ProductsService) {

  }

  @Effect() subscribeProducts$ = this.updates$
    .whenAction(ProductsActions.CALL_SUBSCRIBE_PRODUCTS)
    .switchMap(() => this.productsService.subscribeProducts())
    .map(() => ({type: ProductsActions.LOAD_PRODUCTS_FROM_COLLECTION}));

  @Effect() loadProducts$ = this.updates$
    .whenAction(ProductsActions.LOAD_PRODUCTS_FROM_COLLECTION)
    .switchMap(() => this.productsService.getProducts())
    .map(products => ({type: ProductsActions.PRODUCTS_COLLECTION_UPDATED, payload: products}));
}