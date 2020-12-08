interface IGood {
  id: number,
  new: boolean,
  image: string,
  manufacture: string,
  product_name: string,
  sale: {
    value: number
  },
  price: {
    value: number
  },
  count: number
}
  
  type GoodsState = {//типы объекта состояния
    goods: IGood[],
    cartIsOpen: boolean,
    computedPrice: number
  }
  
  type GoodsAction = {//тип action creator
    type: string
    good: IGood
  }

  type StateCartAction = {//тип action creator
    type: string
    stateCart: boolean
  }
  
  type DispatchType = (args: GoodsAction) => GoodsAction