import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import Icon from 'components/Icon'
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {addGood} from "store/cart/actionCreators";


const CardMainStyled = styled.article`
  position: relative;
  background: #fff;
  z-index: 1;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
  transition: all 300ms linear;
  width:256px;
  text-decoration:none;

  :hover{
    border-color: #0090f0;
  }

  :hover .card-main__add {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) translateZ(0);
  }

  .card-main__link {
    text-decoration: none;
    color:#000;
  }

  .card-main__add {
    color:#000;
    width:260px;
    height:60px;
    position: absolute;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: #fff;
    padding: 15px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(25px) translateZ(0);
    perspective: 800px;
    backface-visibility: hidden;
    transition: opacity .3s ease,visibility .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,visibility .3s ease,transform .3s ease;
    transition: opacity .3s ease,visibility .3s ease,transform .3s ease,-webkit-transform .3s ease;
    display: flex;
    justify-content:space-between;
    z-index: 100;
  }

  .card-main__product {
    padding: 20px 15px 25px 15px;
    background: #fff;
    overflow: hidden;
    position: relative;
    transition: all 300ms linear;
    
  }

  .card-main__image {
    background: center/cover;
    width:100%;
    height: 256px;
  }

  .card-main__product-inner {
    position: relative;
  }

  .card-main__manufactured {
    font-size: 12px;
    text-transform: uppercase;
    color: #999;
    line-height: 1;
    margin-bottom: 10px;
    display: block;
  }
  
   .card-main__product-name{
    font-weight: 400;
    margin: 0;
    line-height: 1;
    text-decoration:none;
   }

   .card-main__reviews {
    list-style:none;
    padding:0;
    margin:0;
   }

   .card-main__price-and-shipping {
    line-height: 20px;
    display: flex;
   }

    .card-main__sale {
      color: #cf2929;
    }

    .card-main__discount {
    display: inline-block;
    vertical-align: top;
    color: #fff;
    background: #cf292b;
    padding: 0 4px;
    border-radius: 5px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    z-index: 4;
    margin-left: 2px;
    }

  .card-main__add-text {
    &:hover {
      color: lightBlue;
    }
  }
  .card-main__add-icon {
    &:hover {
      color: red;
    }
  }
  .card-main__star-fill{
    color: #fdd835
  }
  .card-main__price-regular{
    flex: 2;
    &.lined{
      text-decoration: line-through;
    }
  }

  .card-main__sticker {
    position: absolute;
    top: 10px!important;
    left: 10px;
    display: inline-block;
    color: #fff;
    padding: 0 5px;
    text-align: center;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 5px;
    text-transform: capitalize;
    text-align: center;
    z-index: 1;
    background: blue;
  }

`;

CardMain.propTypes = {
  /**
   * { 
    new: true
    image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    manufacture: "Производитель",
    product_name: "Yаушники про-100",
    sale: {
      value: 1000
    },
    price: {
      value: 1200
    }
  }
   */
  cardData: PropTypes.object, 
  currency: PropTypes.object,
};

export default function CardMain(props) {
  
  const { cardData, currency } = props
  const discount = cardData ? Math.round((cardData.sale.value / cardData.price.value * 100) - 100) : null
  const { t } = useTranslation();
  const price = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 0,
  }).format(cardData.price.value)

  const sale = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 0,
  }).format(cardData.sale.value)

  const isSale = Object.keys(cardData.sale).length > 0
  const classes = props.className ? "card-main " + props.className : "card-main"
  const dispatch = useDispatch();

  return (
    <CardMainStyled className={classes}>
      { cardData ?
      <Link className="card-main__link" to="#">
        {cardData.new ? <div className="card-main__sticker">{t('newGoods')}</div>: null}
        <div className="card-main__image"  style={{backgroundImage: `url('${cardData.image}')`}}></div>
        <div className="card-main__product">
        <div className="card-main__manufactured">{cardData.manufacture}</div>
        <h3 className="card-main__product-name">{cardData.product_name}</h3>
          <ul className="card-main__reviews">
            <Icon className="card-main__star-fill" name="grade" />
            <Icon className="card-main__star-fill" name="grade" />
            <Icon className="card-main__star-fill" name="grade" />
            <Icon className="card-main__star-fill" name="grade" />
            <Icon className="card-main__star-fill" name="grade" />
          </ul>
          <div className="card-main__price-and-shipping">
            { cardData.price.value ? <div className={`card-main__price-regular ${isSale ? "lined": ""}`}>{price}</div> : null}
            { isSale ? <div className="card-main__sale">{sale }</div> : false}
            { discount && isSale ? <div className="card-main__discount">{ discount } %</div> : null }
          </div>
          <div className="card-main__add">
            <span className="card-main__add-text" onClick={ () => dispatch(addGood(cardData)) }>{t('addToCard')}</span> <span><Icon className="card-main__add-icon" name="favorite" /></span>
          </div>
        </div>
      </Link>
       : null}
    </CardMainStyled>
  )
}