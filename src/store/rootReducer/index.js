import { combineReducers } from 'redux'
import cart from '../cart/reducer.ts'
import application from "../application/reducer"

export const rootReducer = combineReducers({
  cart,
  application
})
