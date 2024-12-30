import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectFlip } from 'swiper/modules';
import Content from '../content/Content';
import './learnSet.css';
import imgPrev from '../../assets/images/icon-prev.png';
import imgNext from '../../assets/images/icon-next.png';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';

const LearnSet = () => {
  const [effect, setEffect] = useState('cards'); // Начальный эффект - cards
  const [isShowTable, setIsShowTable] = useState(false);
  const swiperRef = useRef(null);
  const viewRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      setEffect('cards'); // Сначала устанавливаем эффект cards
      swiperRef.current.slideNext(); // Затем двигаемся вперед
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      setEffect('cards'); // Сначала устанавливаем эффект cards
      swiperRef.current.slidePrev(); // Затем двигаемся назад
    }
  };

  const handleCardClick = (index) => {
    const card = document.querySelectorAll('.card-wrap__body')[index];
    if (card) {
      card.classList.toggle('flipped'); // Переключаем класс flipped
    }
  };

  const changeView = () => {
    setIsShowTable((isShowTable) => !isShowTable);
  };

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.style.display = isShowTable ? 'table' : 'none';
    }
  }, [isShowTable]);

  return (
    <Content>
      <div>
        <div className="exit text-right">
          <button className="btn btn-danger">Выйти</button>
        </div>
        <div className="card-item">
          <Swiper
            effect={effect}
            grabCursor={true}
            modules={[EffectCards, EffectFlip]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {[...Array(9)].map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card-wrap__body"
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-wrap__front">Word {index + 1}</div>
                  <div className="card-wrap__back">Перевод {index + 1}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            className="prev"
            src={imgPrev}
            alt="prev"
            onClick={handlePrev} // Двигаем назад с эффектом cards
          />
          <img
            className="next"
            src={imgNext}
            alt="next"
            onClick={handleNext} // Двигаем вперед с эффектом cards
          />
        </div>
        <div className="words w-75 m-auto">
          <button className="btn btn-success mb-20" onClick={changeView}>
            {!isShowTable ? 'Show words' : 'Hide words'}
          </button>
          <table
            ref={viewRef}
            className="table table-hover text-center w-100"
            style={{ display: 'none' }}
          >
            <thead className="table-dark">
              <tr>
                <th>№</th>
                <th>Word</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Word 1</td>
                <td>Перевод 1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Word 2</td>
                <td>Перевод 2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Word 3</td>
                <td>Перевод 3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Word 4</td>
                <td>Перевод 4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Word 5</td>
                <td>Перевод 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Content>
  );
};

export default LearnSet;
