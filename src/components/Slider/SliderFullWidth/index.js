import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PropTypes from 'prop-types'

const SliderFullWidthStyle = styled.div`
    position: relative;
    height:640px;
    
    .swiper-slide {
        height:640px;

        .SliderFullWidth__slide{
            background: center/cover;
            height:100%;
        }

        .SliderFullWidth__text {
            position: absolute;
            top: 50%;
            left: 240px;
            font-size:64px;
            color:white;
        }

        img {
            max-height:100%;
        }
    }

    .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        background:white;

        &.swiper-pagination-bullet{
            background:rgb(0, 122, 255);
        }
    }
    
    `
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

SliderFullWidth.propTypes = {
  slides: PropTypes.array
};

function SliderFullWidth(props) {
  const { slides } = props
  return (
    <SliderFullWidthStyle>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map( (v, index) => {
          const style = {
            backgroundImage: `url(${v.image})`
          }
          return (
            <SwiperSlide key={index}>
              <div className="SliderFullWidth__slide" style={style} ></div>
              <div className="SliderFullWidth__text">{v.text}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SliderFullWidthStyle>
  );
};
export default SliderFullWidth