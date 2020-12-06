import * as actionTypes from "./actionTypes"

const initialState: GoodsState = {
  goods: [
    {
      id: 1,
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      },
      count: 1
    },{
      id: 2,
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      },
      count: 1
    },{
      id: 3,
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      },
      count: 1
    },{
      id: 4,
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      },
      count: 1
    },{
      id: 5,
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      },
      count: 1
    }
  ],
  cartIsOpen: true
}

const cart = (
    state: GoodsState = initialState,
    action: any
  ): GoodsState => {
    switch (action.type) {
      case actionTypes.ADD_GOODS:
        const newGood: IGood = action.good;
        return {
          ...state,
          goods: state.goods.concat(newGood),
        }
      case actionTypes.REMOVE_GOODS:
        const updatedGoods: IGood[] = state.goods.filter(
          good => good.id !== action.good.id
        )
        return {
          ...state,
          goods: updatedGoods,
        }
      case actionTypes.SET_STATE_CART:
        return {
          ...state,
          cartIsOpen: action.stateCart,
        }
      }
    return state
  }
  
  export default cart