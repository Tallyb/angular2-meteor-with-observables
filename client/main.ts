import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {AppComponent} from './app.component';
import {productsReducer} from "./imports/demo/products.reducer";
import {combineReducers, provideStore} from "@ngrx/store";
import {storeLogger} from 'ngrx-store-logger';
import {compose} from '@ngrx/core/compose';
import {runEffects} from "@ngrx/effects";
import {ProductsEffects} from "./imports/demo/products.effects";
import {ProductsService} from "./imports/demo/products.service";

bootstrap(AppComponent, [
  ProductsService,
  provideStore(compose(
    storeLogger({
      collapsed: true,
      duration: true,
      timestamp: true
    }),
    combineReducers
  )({
    products: productsReducer
  })),
  runEffects(
    ProductsEffects
  )
]);
