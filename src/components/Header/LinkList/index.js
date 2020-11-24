import React, { useState } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransition'
import styled from 'styled-components';
import Icon from "components/Icon"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import HeaderSubMenu from 'components/Header/HeaderSubMenu'

const LinkWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const LinkItem = styled.li`
margin-right: 25px;

a {
  position: relative;
  padding: 32px 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0;
  font-weight: 700;
  font-size: 14px;
  color: #253237;
  background: transparent;
  text-transform: uppercase;
  line-height: 26px;
  height: 26px;
  border-bottom: 2px solid transparent;
  position: relative;
  transition: color .3s ease;

  &:hover{
    color: #2fb5d2;
  }
}

.material-icons{
    margin-right: 5px;
}


`;

const LinkList = (props) => {

  const [positionMenu, setpositionMenu] = useState(null);

  const mouseOverHandler = (e) => {
    return setpositionMenu(true)
  }

  return (
    <nav className="link-list">
      <LinkWrap onMouseLeave={() => setpositionMenu(null)}>
        {
          props.list.map((v, idx) => {
            return (
              <LinkItem key={idx}>
                <Link to={v.href} onMouseOver={(e) => mouseOverHandler(e)} >
                  <Icon name={v.imgName} /> <span>{v.text}</span>
                </Link>
              </LinkItem>
            )
          })
        }
        <CSSTransitionGroup
          in={positionMenu}
          timeout={400}
          classNames="fade-up" unmountOnExit>
          <HeaderSubMenu onMouseOver={(e) => mouseOverHandler(e)} />
        </CSSTransitionGroup>
      </LinkWrap>
    </nav>
  )
}

Icon.propTypes = {
  list: PropTypes.array, //массив ссылок
};

export default LinkList