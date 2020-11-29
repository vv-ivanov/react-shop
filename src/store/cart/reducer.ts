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
    }
  ]
}

const cart = (
    state: GoodsState = initialState,
    action: GoodsAction
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
    }
    return state
  }
  
  export default cart