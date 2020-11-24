import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


const ButtonStyled = styled.button`
  margin-right:15px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  background:transparent;
  border:none;
  outline:none;
  padding:10px 20px ;
  cursor:pointer;
  color:rgba(0,0,0,.4);
  transition:all ease-in-out .2s;
  border-bottom:2px solid transparent;

  &.active{
    border-bottom:2px solid #42b3f4;
    color:black;
  }
  
  `

const TabButtons = ({ buttons, changeTab, activeTab }) => {

  return (
    <div className="tab-buttons">
      {buttons.map( (button, index) => {
        return <ButtonStyled key={index} className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</ButtonStyled>
      })}
    </div>
  )
}

TabButtons.propTypes = {
  buttons: PropTypes.array,
  changeTab: PropTypes.func,
  activeTab: PropTypes.string,
};

export default TabButtons