// import React from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'components/Icon';
import CartItem from "components/CartItem";
// const iconPath = process.env.PUBLIC_URL + '/static/img/';


const CartStyled = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  padding:100px 50px;
  background:#ffffff4f;
  
  .cart__inner{
    background:#fff;
    height:100%;
    border-radius: 5px;
    padding:25px;
  }
  .cart__inner-header{
    display:flex;
    justify-content:space-between;
  }
  .cart__close{
    cursor: pointer;
  }
  .cart__inner-body{
    padding:20px 0 0;
    overflow:auto;
  }
`;

const Cart = () => {
  const { t } = useTranslation();
  const goods = useSelector((state: any) => state.cart.goods)
  const currency = {
    code: "RUB"
  }
  
  return(
        <CartStyled>
        <div className="cart__inner">
          <div className="cart__inner-header">
          <h3 className="cart__title">{t("cart")}</h3>
            <div className="cart__close">
              <Icon name="close" />
            </div>
          </div>
          <div className="cart__inner-body">
          {goods.length > 0 ? goods.map( (good: IGood, index: number) => <CartItem key={index} cardData={good} />) : <h3 className="cart__title">{t("emptyCart")}</h3> }
          </div>
        </div>
        </CartStyled>
    )
}
export default Cart