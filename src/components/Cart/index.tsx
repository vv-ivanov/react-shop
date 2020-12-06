// import React from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'components/Icon';
import CartItem from "components/CartItem";
import { setStateCart } from 'store/cart/actionCreators';
// const iconPath = process.env.PUBLIC_URL + '/static/img/';


const CartStyled = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  padding:100px 50px;
  background:#0000004f;
  
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
    height: 620px;
  }

  &.fade-up-enter {
    visibility: hidden;
    opacity: 0;
  }

  &.fade-up-enter-active {
    visibility: visible;
    opacity: 1;
    transition: opacity 300ms;
  }
  &.fade-up-exit {
    opacity: 1;
  }
  &.fade-up-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const Cart = (): JSX.Element => {
  const { t } = useTranslation();
  const goods = useSelector((state: any) => state.cart.goods)
  const dispatch = useDispatch();
  const currency = {
    code: "RUB"
  }
  
  function close(): void {
    dispatch( setStateCart(false))
  }
  
  return(
        <CartStyled>
        <div className="cart__inner">
          <div className="cart__inner-header">
          <h3 className="cart__title">{t("cart")}</h3>
            <div className="cart__close">
              <Icon name="close" clickHandle={() => dispatch( setStateCart(false ) )} />
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