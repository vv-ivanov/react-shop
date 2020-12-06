import * as actionTypes from "./actionTypes"

const initialState = {
  goods: []
}

const application = ( state = initialState, action ) => {
    switch (action.type) {
      case actionTypes.ADD_GOODS:
        const newGood = action.good;
        return {
          ...state,
          goods: state.goods.concat(newGood),
        }
    }
    return state
  }
  
  export default application