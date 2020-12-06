import * as actionTypes from "./actionTypes"

export function addGood(good ) {
  const action = {
    type: actionTypes.ADD_GOODS,
    good,
  }

  return simulateHttpRequest(action)
}
