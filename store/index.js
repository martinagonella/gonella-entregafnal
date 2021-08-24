import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../ReactotronConfig'

import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/bread.reducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import PlacesReducer from './places.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
  cart: CartReducer,
  auth: AuthReducer,
  places: PlacesReducer,
})

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
    Reactotron.createEnhancer(),
  ),
)