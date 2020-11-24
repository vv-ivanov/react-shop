import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const BannerBigLeftStyled = styled.section`
  padding: 40px 20px;
  margin:0 -15px;
  display: flex;

    .banner__wrap {
      padding: 0 15px;
      display:flex;
      flex: 1;
    }

    .banner__wrap_left{
      order:1;
    }

    .banner__wrap_right{
      order:2;
      justify-content: space-between;
    }

    .banner__wrap_col{
      flex-direction:column;
    }

    .banner__box-img {
      background: center/cover;
      height:100%;
      width:100%;
      transition:transform .3s linear;
    }

    .banner__box {
      position: relative;
      will-change: scale;
      overflow:hidden;

      &:hover {
        .banner__box-img {
          transform: scale(1.05);
        }
      }
    }

    .banner__box_big {
      height:560px;
      width:100%;
    }

    .banner__box_small {
      height:260px;
      width:100%;
    }

    .banner__description {
      position: absolute;
      font-size: 24px;
      font-weight: 700;
      color: #fff;
    }

    .banner__description_big{
      left: 60px;
      top: 60px;
      width: 400px;
    }

    .banner__description_top {
      bottom: 66px;
      left: 41px;
      width: 200px;
    }

    .banner__description_bottom {
      bottom:60px;
      width: 200px;
      left: 41px;
    }
`;

BannerBigLeft.propTypes = {
  top: PropTypes.object, 
  bottom: PropTypes.object,
  big: PropTypes.object, 
};

export default function BannerBigLeft(props){
  const {top, bottom, big} = props

    return(
        <BannerBigLeftStyled className="banner">
            <div className="banner__wrap banner__wrap_left">
              <Link to={big.link} className="banner__box banner__box_big">
                <div className="banner__box-img" style={{backgroundImage: `url('${big.image}')`}} alt={big.alt} ></div>
                <p className="banner__description banner__description_big">{big.description}</p>
              </Link>
            </div>
            <div className="banner__wrap banner__wrap_right banner__wrap_col">
              <Link to={top.link} className="banner__box banner__box_small">
                <div className="banner__box-img" style={{backgroundImage: `url('${top.image}')`}} alt={top.alt} ></div>
                <p className="banner__description banner__description_top">{top.description}</p>
              </Link>
              <Link to={bottom.link} className="banner__box banner__box_small">
              <div className="banner__box-img" style={{backgroundImage: `url('${bottom.image}')`}} alt={bottom.alt}  ></div>
              <p className="banner__description banner__description_bottom">{bottom.description}</p>
              </Link>
            </div>
        </BannerBigLeftStyled>
    )
}

