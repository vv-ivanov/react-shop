import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const SearchStyled = styled.div`
    padding: 0;
    position: relative;
    width: 100%;
    float: left;
    height: 46px;
    color: #b1b1b1;
    max-width: 450px;
    
    .Search__input{
        padding: 10px 70px 10px 20px;
        width: 100%;
        height: 46px;
        font-size: 14px;
        background: #fff;
        color: #253237;
        border-width: 2px;
        border-radius: 30px;
        border-color: #0090f0;

        &:focus{
            outline:none;
        }
    }

    .Search__submit {
        display:flex;
        justify-content:center;
        align-items:center;
        position: absolute;
        top: 0;
        right: 0;
        height: 46px;
        line-height: 46px;
        text-align: center;
        width: 65px;
        text-align: center;
        color: #fff;
        border-radius: 0 30px 30px 0;
        padding: 0;
        border: 0;
        transition: all 300ms linear;
        background: #0090f0;
        cursor:pointer;

        &:hover {
            opacity: .8;
        }
    }
`;

Search.propTypes = {
  onSubmitHandler: PropTypes.func,
  icon: PropTypes.element,
  placeholder: PropTypes.string
};

export default function Search(props) {
  const { onSubmitHandler, icon, placeholder } = props
  return (
    <SearchStyled>
      <input className="Search__input" placeholder={placeholder ? placeholder : "Enter your search key ... "} />
      <button className="Search__submit" onClick={onSubmitHandler}>
        {icon ? icon : <span className="material-icons">search</span>}
      </button>
    </SearchStyled>
  )
}