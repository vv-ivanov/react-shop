import React, { useState } from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import Icon from 'components/Icon'
import {CardMain} from  "components/Card"
import {useSelector} from "react-redux";

const iconPath = process.env.PUBLIC_URL + '/static/img/';

const CategoryStyled = styled.div`
    .category__filters{
      padding: 10px 30px;
      background: #f6f6f6;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
    }
    
    .category__text {
      line-height: 20px;
      font-size: 14px;
      padding: 5px;
      margin: 0;
      color: #888;
      font-weight: 400;
      text-transform: capitalize;
    }
    
    .category__filter {
      border: 1px solid #ebebeb;
      padding: 2px 15px;
      line-height: 24px;
      font-size: 14px;
      margin: 0;
      border-radius: 30px;
      color: #253237;
      text-align: left;
      box-shadow: none;
      outline:none;
      color: #888;
    }
    
    .category__item {
      display: flex;
      justify-content: space-between;
      align-items:center;
    }
    
    .category__icon {
      font-size: 30px;
      margin-right:10px;
      cursor:pointer;
    }
    
    .category__catalog {
      display:flex;
      flex-wrap:wrap;
      justify-content: center;
    }
    
    .category__catalog-item {
      margin:0 20px 20px;
    }
    
    .category__catalog.list {
      flex-direction: column;
      
      .card-main {
        width:100%;
      }
    
      .card-main__link{
        display:flex;
        flex-direction:row;
      }
    }
`;


export default function Category() {
  const {t} = useTranslation();
  const totalCountFounded = 5
  const goods = useSelector((state) => state.cart.goods)
  const currency = {
    code: "RUB"
  }
  const [viewMode, setViewMode] = useState("grid");
  const [filterResult, setfilterResult] = useState([...goods, ...goods, ...goods]);
  const classesCatalog = viewMode === "list" ? `category__catalog ${viewMode}` : "category__catalog"
  
  function filterHandler(e){
    if(e.target.value === ""){
      setfilterResult([...goods, ...goods, ...goods])
      return
    }
    const result = filterResult.filter(v => v.product_name.toLowerCase().includes(e.target.value))
    setfilterResult(result)
  }
  
  return (
    <CategoryStyled>
      <div className="category__filters">
        <span className="category__item">
        <Icon name="view_module" className="category__icon" clickHandle={() => setViewMode("grid")}/>
        <Icon name="list" className="category__icon" clickHandle={() => setViewMode("list")}/>
        </span>
        
        <div className="category__text">{t("totalFound")} {totalCountFounded}</div>
        
        <span className="category__item">
        <div className="category__text">{t("filterBy")}</div>
        <input className="category__filter" onInput={filterHandler} />
        </span>
        
      </div>
      <div className={classesCatalog}>
        {filterResult.map( (dataObj, index) => <CardMain className="category__catalog-item" key={index} cardData={dataObj} currency={currency} />)}
      </div>
    </CategoryStyled>
  )
}