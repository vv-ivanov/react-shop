import React, {useContext} from 'react';
import styled from 'styled-components';
import LinkList from "./LinkList"
import Search from "components/Search"
import Cart from "components/Cart/index.tsx"
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux'
import DropDownMenu from 'components/DropDownMenu';
import CSSTransitionGroup from 'react-transition-group/CSSTransition'
import {setStateCart} from 'store/cart/actionCreators';
import Switch from '@material-ui/core/Switch';
import {ThemeContextConsumer} from "helpers/context/themeContext";

const iconPath = process.env.PUBLIC_URL + '/static/img/';


const HeaderStyled = styled.header`
  position: fixed;
  width:100%;
  top:0;
  left:0;
  z-index:100;
  padding: 10px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity:.95;
  box-shadow: 0 8px 6px -6px rgba(0,0,0,.4);
  max-height: 76px;
`;

const HeaderLogo = styled.img`
  display: block;
  max-width: 100%;
  height: 34px;
  margin-right: 50px;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderCart = styled.ul`
  display: flex;
  list-style:none;

  li {
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .shopping_cart{
    position:relative;
  }
  .shopping_cart_stick{
    position:absolute;
    top: -15px;
    left: -13px;
    color:#fff;
    min-width:25px;
    height:25px;
    border-radius:50%;
    background:lightBlue;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:10px;
    line-height:1;
  }
`;

const fakeFetch = () => {
  let myHeaders = new Headers();
  myHeaders.append("Cookie", "__cfduid=db590943032f1a095ea2220205927a3ea1605864335; language_id=ru");
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/api/json/objects/getMedia?token=Hy6U3z61fflbgT2yJ%2FVdlQ2719&platform=js&uuid=1536304442&objectId=775371&module_name=objects&statuses[1]=new&statuses[2]=approved", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const Header = () => {
  const {t} = useTranslation();
  const cartIsOpen = useSelector((state) => state.cart.cartIsOpen)
  const computedPrice = useSelector((state) => state.cart.computedPrice)
  const dispatch = useDispatch();
  const context = useContext
  const list = [
    {
      text: t('home'),
      href: "/",
      imgName: "home"
    },
    {
      text: t('audio'),
      href: "/audio",
      imgName: "headset"
    },
    {
      text: t('video'),
      href: "/video",
      imgName: "personal_video"
    },
    {
      text: t('category'),
      href: "/category",
      imgName: "category"
    }
  ]
  // const handleChange = (event) => {
  //   setStateTheme({...stateTheme, [event.target.name]: event.target.checked});
  // };
  // const [stateTheme, setStateTheme] = React.useState(context.theme);
  const goodsCount = useSelector((state) => state.cart.goods.length)
  
  return (
    <HeaderStyled>
      <ThemeContextConsumer>
        {context => (
          <React.Fragment>
            <HeaderLogo src={`${iconPath}logo192.png`}/>
            <HeaderMenu>
              <LinkList list={list}/>
            </HeaderMenu>
            <Search onSubmitHandler={fakeFetch} placeholder={t("headerFormPlaceholder")}/>
            <HeaderCart>
              <li className="shopping_cart">
                <span className="material-icons" onClick={() => dispatch(setStateCart(true))}>shopping_cart</span>
                {goodsCount > 0 ? <span className="shopping_cart_stick">{goodsCount}</span> : null}
                {computedPrice ? computedPrice : 0} руб
              </li>
              <li>
                <DropDownMenu
                  btnContent={() => <div><span className="material-icons">language</span><span>rus</span></div>}
                  items={[{locale: "en", text: "English"}, {locale: "ru", text: "Русский"}, {
                    locale: "fr",
                    text: "French"
                  }]}
                />
              </li>
              <li>
                <Switch
                  checked={context.theme === "dark"}
                  onChange={context.toggleTheme}
                  color="primary"
                  name="checkedThemeSwitch"
                  inputProps={{'aria-label': 'primary checkbox'}}
                />
                dark-theme
              </li>
            </HeaderCart>
            <CSSTransitionGroup
              in={cartIsOpen}
              timeout={400}
              classNames="fade-up" unmountOnExit>
              <Cart/>
            </CSSTransitionGroup>
          </React.Fragment>
        )}
      </ThemeContextConsumer>
    </HeaderStyled>
  )
}
export default Header