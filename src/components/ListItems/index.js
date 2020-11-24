import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ListItemsStyled = styled.div`
    
    .list__title {
      font-size: 16px;
      text-transform: capitalize;
      padding-bottom: 20px;
      margin-bottom: 25px;
      position: relative;
      color: #253237;
      border-bottom: 1px solid #e3e3e3;

      &:after {
        background: #0090f0;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 60px;
        height: 2px;
      }
    }

    .list__wrap {
      margin-bottom: 0;
      background: none;
      padding:0;
    }

    .list__item {
      display: block;
      margin: 0;
      line-height: 1;
      border: 0;
      padding: 0;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .list__link {
      font-size: 14px;
      line-height: 24px;
      padding: 0;
      display: block;
      text-transform: capitalize;
      color: #666;
      margin-bottom: 0;
      display: block;
      position: relative;
      transition: all 300ms linear;
      text-decoration:none;

      &:hover {
        color: #0090f0;
        transform: translateX(10px);
      }
    }
    
`;

ListItems.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any
};


export default function ListItems(props) {
  const {items, title, children} = props
  return (
    <ListItemsStyled>
      <div className="list__title">{title}</div>
      <ul className="list__wrap">
      { children ? 
        children :
        items.map( (it, index) => (
        <li className="list__item" key={index}>
          <a className="list__link" href={it.link}>{it.text}</a>
          </li>
        ) )
      }
      </ul>
      
    </ListItemsStyled>
  )
}