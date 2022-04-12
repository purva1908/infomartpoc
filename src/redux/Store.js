// import all our reducers

import {ProductReducer, SelectedProductReducer} from './productdata/ProductReducer';
import { combineReducers,createStore ,applyMiddleware,compose} from 'redux';
import { statusReducer } from './productdata/StatusReducer';
import { userReducer } from './userdata/UserReducer';
import {cartItems} from './cartdata/CartReducer';
import { loggerMiddleware } from './middleware/middleware';
import {promiseResolver} from './middleware/PromiseResolverMiddleware';
import thunk from 'redux-thunk';


const reducers=combineReducers({
    products: ProductReducer,
    selectProduct:SelectedProductReducer,
    status:statusReducer,
    user:userReducer,
    cartItem: cartItems
});



const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      }): compose;

    const enhancer = composeEnhancers(
        applyMiddleware(
               loggerMiddleware,
               promiseResolver,
               thunk)
        // other store enhancers if any
      );
      const store = createStore(reducers, enhancer);
      
      
      // export default createStore(reducers, 
      //                applyMiddleware(
      //                   loggerMiddleware,
      //                   thunk             
      //                   ));
      
      export default store;

