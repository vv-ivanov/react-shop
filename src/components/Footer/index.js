import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Icon from 'components/Icon'
import ListItems from 'components/ListItems'
import Search from 'components/Search'
const iconPath = process.env.PUBLIC_URL + '/static/img/';

const FooterStyled = styled.footer`
    background: #efefef;
    display: flex;
    position: relative;
    padding: 60px 0;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top:0;
      left: 0;
      width:30%;
      height:100%;
      background: #f6f6f6;
      z-index: 1;
      pointer-events: none;
    }

    .footer__wrap {
      padding:0 60px;
      position:relative;
      z-index: 2;
      display: flex;
      justify-content:space-between;
      width:100%;
    }

    .footer__phone-text {
      font-size: 22px;
      color: #253237;
      margin: 0;
    }
`;


export default function Footer() {
  const { t } = useTranslation();
  const items = [
    {
      link: "/",
      text: "Доставка"
    },{
      link: "/",
      text: "Оплата"
    },{
      link: "/",
      text: "Связаться"
    },{
      link: "/",
      text: "История"
    },{
      link: "/",
      text: "О нас"
    }
  ]
  
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

  return (
    <FooterStyled>
      <div className="footer__wrap">
        <div className="footer__left">
          <img src={`${iconPath}logo192.png`} alt="footerLogo" />
          <p className="footer__text">{t('footerText')}</p>
          <span className="material-icons">phone_in_talk</span>
          <div className="footer__phone-text">(+800) 345 678, (+800) 123 456</div>
          <div className="footer__social">
            <Icon name="facebook" />
            <Icon name="facebook" />
            <Icon name="facebook" />
            <Icon name="facebook" />
          </div>
        <div className="">Copyright © {t('сopyright')}</div>
        </div>
          <ListItems items={items} title="Информация" />
          <ListItems items={items} title="Информация" />
  <ListItems title="Информация"><Search onSubmitHandler={fakeFetch} placeholder={t("footerFormPlaceholder")} icon={<span>{t("singUp")}</span>} /></ListItems>
      </div>
      
    </FooterStyled>
  )
}