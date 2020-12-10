import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {Tabs, Tab} from 'components/Tabs'
import {CardMain} from 'components/Card'

const TabCategoryStyled = styled.section`

    .tab-category-main__wrap {
      display: flex;

      .card-main {
        margin-right: 10px;
      }
    }
    
`;


export default function TabCategoryMain() {
  const { t } = useTranslation();
  const featuredGoods = [
    {
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      }
    },{
      new: true,
      image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      }
    },{
      new: true,
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
  ]

  const onSaleGoods = [
    {
      new: true,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
      },
      price: {
        value: 1200
      }
    },{
      new: false,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
      },
      price: {
        value: 1200
      }
    },{
      new: true,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 1200
      }
    }
  ]

  const bestSellersGoods = [
    {
      new: true,
      image:"https://images.unsplash.com/photo-1498753427761-548428edfa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {},
      price: {
        value: 2000
      }
    },{
      new: true,
      image:"https://images.unsplash.com/photo-1498753427761-548428edfa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {},
      price: {
        value: 3000
      }
    },{
      new: false,
      image:"https://images.unsplash.com/photo-1498753427761-548428edfa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      manufacture: "Производитель",
      product_name: "Yаушники про-100",
      sale: {
        value: 1000
      },
      price: {
        value: 5000
      }
    }
  ]

  const currency = {
    code: "RUB"
  }
  

  return (
    <TabCategoryStyled className="tab-category-main">
       <Tabs>
         <Tab label={t('featured')}>
           <div>

             <div className="tab-category-main__wrap">
              {featuredGoods.map( (dataObj, index) => <CardMain key={index} cardData={dataObj} currency={currency} />)}
             </div>
             
           </div>
         </Tab>
         <Tab label={t('onSale')}>
           <div>
             <div className="tab-category-main__wrap">
              {onSaleGoods.map( (dataObj, index) => <CardMain key={index} cardData={dataObj} currency={currency} />)}
             </div>
           </div>
         </Tab>
         <Tab label={t('bestseller')}>
           <div>
           <div className="tab-category-main__wrap">
              {bestSellersGoods.map( (dataObj, index) => <CardMain key={index} cardData={dataObj} currency={currency} />)}
             </div>
           </div>
         </Tab>
       </Tabs>
    </TabCategoryStyled>
  )
}