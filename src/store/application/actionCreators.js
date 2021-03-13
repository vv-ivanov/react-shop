import * as actionTypes from "./actionTypes"
import {Application} from "Api"

export function getInfo(good) {
  return async (dispatch) => {
    const res = await Application.fetchUser()
    dispatch({
      type: "SET_STATE_CART",
      stateCart: "hehe"
    })
  }
}
