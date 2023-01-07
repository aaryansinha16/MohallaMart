import { authReducer } from "./auth/auth.reducer";
import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from "./products/product.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { orderReducer } from "./order/order.reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    order : orderReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export const store = legacy_createStore(rootReducers, createComposer(applyMiddleware(thunk)))