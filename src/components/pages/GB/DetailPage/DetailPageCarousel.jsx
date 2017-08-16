import PropTypes from 'prop-types';
import React from 'react';
import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css';

import { hostUrl } from "utils/urls";

function DetailPageCarousel(props) {
  const { images } = props;

  return (
    <div className="detail-page__carousel detail-page-carousel">
      {
        images.length ?
          <Swiper
            swiperOptions={{
              slidesPerView: 'auto',
              spaceBetween: 1,
            }}
            navigation
            pagination={false}
          >
            {
              images.map(item => (
                <Slide key={`detail-image-${Math.floor(Date.now() * Math.random())}`} className="detail-page-carousel__item">
                  <img className="detail-page-carousel__image" src={`${hostUrl}${item}`} alt="" />
                </Slide>
              ))
            }
          </Swiper>
          :
          <div className="detail-page-carousel__cover">Нет изображений</div>
      }
    </div>
  );
}

DetailPageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailPageCarousel;
