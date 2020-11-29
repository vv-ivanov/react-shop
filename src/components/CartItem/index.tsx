// import React from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'components/Icon';
import { CardMain } from 'components/Card'
// const iconPath = process.env.PUBLIC_URL + '/static/img/';


const CartItemStyled = styled.div`
  width:100%;

  .cart-item__inner{
    padding:10px;
    display:flex;
    justify-content:space-between;
  }
  .cart-item__img{
    max-height:100%;
    height:150px;
    border-radius:5px;
  }
`;

interface Props {
  cardData: IGood;
}

const CartItem: React.FC<Props> = (props) => {
  const { cardData } = props
  const { t } = useTranslation();
  const goods = useSelector((state: any) => state.cart.goods)
  const currency = {
    code: "RUB"
  }


  return (
    <CartItemStyled>
      <div className="cart-item__inner">
        <img src={cardData.image} className="cart-item__img" />
        <div className="cart-item__name">{cardData.product_name}</div>
        <input className="cart-item__price" value={cardData.price.value} />
        <div className="cart-item__count">{cardData.count}</div>
        <div className="cart-item__delete">
          <Icon name="delete" />
        </div>
      </div>
    </CartItemStyled>
  )
}
export default CartItem