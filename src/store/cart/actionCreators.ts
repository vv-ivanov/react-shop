import * as actionTypes from "./actionTypes"

export function addGood(good: IGood) {
  const action: GoodsAction = {
    type: actionTypes.ADD_GOODS,
    good,
  }

  return simulateHttpRequest(action)
}

export function removeGood(good: IGood) {
  const action: GoodsAction = {
    type: actionTypes.REMOVE_GOODS,
    good,
  }
  return simulateHttpRequest(action)
}

export function setStateCart(stateCart: boolean) {
  const action: StateCartAction = {
    type: actionTypes.SET_STATE_CART,
    stateCart
  }
  return action
}

export function simulateHttpRequest(action: GoodsAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
