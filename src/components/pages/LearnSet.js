import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import Content from '../content/Content';
import './learnSet.css';
import imgPrev from '../../assets/images/icon-prev.png';
import imgNext from '../../assets/images/icon-next.png';

import 'swiper/css';
import 'swiper/css/effect-cards';

const LearnSet = () => {
  const rotateRef = useRef();

  const onRotate = (e) => {
    e.target.style.transform = `rotateY(180deg)`;
    rotateRef.current.style.transform = `rotateY(360deg)`;
  };

  return (
    <Content>
      <div>
        <div>Выйти</div>
        <div className="card-item">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back" ref={rotateRef}>
                  солома
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back">солома</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-wrap__body" onClick={(e) => onRotate(e)}>
                <div className="card-wrap__front">straw</div>
                <div className="card-wrap__back" ref={rotateRef}>
                  солома
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <img className="prev" src={imgPrev} alt="prev" />
          <img className="next" src={imgNext} alt="next" /> */}
        </div>
      </div>
    </Content>
  );
};

export default LearnSet;
