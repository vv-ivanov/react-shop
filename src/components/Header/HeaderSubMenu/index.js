import React from 'react';
import styled from 'styled-components';
import ListItems from 'components/ListItems'

const SubMenuStyled = styled.div`
  position: relative;
  padding: 50px 20px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;

  .sub-menu{
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    justify-content:space-around;
  }

  &.fade-up-enter {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
  }

  &.fade-up-enter-active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.fade-up-exit {
    opacity: 1;
  }
  &.fade-up-exit-active {
    transform: translateY(-20px);
    opacity: 0;
    transition: transform 300ms, opacity 300ms;
  }
  // &.fade-up-exit-done{
  //   visibility: hidden;
  // }
  

`;

const collect = [
  {
    link: "/",
    text: "Кабели и адаптеры"
  },{
    link: "/",
    text: "Батареи"
  },{
    link: "/",
    text: "Зарядный устройства"
  },{
    link: "/",
    text: "Чехлы"
  },{
    link: "/",
    text: "Электронные сигареты"
  }
]

const HeaderSubMenu = () => {
  return (
      <SubMenuStyled>
        <div className="sub-menu">
          <ListItems items={collect} title="аксесуары" />
          <ListItems items={collect} title="аудио" />
          <ListItems items={collect} title="видео" />
          <ListItems items={collect} title="умная электроника" />
        </div>
      </SubMenuStyled>
  )
}

export default HeaderSubMenu