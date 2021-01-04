import React from 'react'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IImage } from '../../types/portfolio.types';

SwiperCore.use([Navigation, Autoplay]);

interface IProps {
  images: IImage[];
}
const ImageSwiper = ({ images }: IProps) => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
    >
      {
        images.map((image, i) => (
          <SwiperSlide key={`swiper-image-${image.url}`}>
            <img src={image.url} alt={`swiper-image`} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ImageSwiper
