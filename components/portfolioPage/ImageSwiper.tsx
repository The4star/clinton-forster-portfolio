import React from 'react'
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IImage } from '../../types/portfolio.types';

SwiperCore.use([Navigation]);

interface IProps {
  images: IImage[];
}
const ImageSwiper = ({images}: IProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      {
        images.map((image, i) => (
          <SwiperSlide key={`swiper-image-${image.url}`}>
            <img  src={image.url} alt={`swiper-image`}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ImageSwiper
