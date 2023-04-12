/* eslint-disable import/no-unresolved */
import React from 'react';
import './HomePage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';


function HomePage() {

  return (
    <>
      <div className="columnHomePage">
        <div className="leftColumn">
          <p>ЛЕГЕНДА ВОЗВРАЩАЕТСЯ!</p>
          <p>
            Пройдет немного времени и мы с Вами снова встретимся на торговых полках.
            Мы помним Ваши вкусы и потребности, ведь для их удовлетворения наша компания
            трудилась более 30 лет.
            Мы продолжаем наш путь с энтузиазмом, вооруженные честностью и любовью к своему
            Великому Делу - кормить людей,
            заряжать их энергией созидания.
          </p>
          <p>
            Руководство компании желает Вам здоровья и всяческих успехов!
          </p>
        </div>
        <div className="rightColumn">
          <img src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2022/05/Шпикачки-Москворецкие-ГОСТ-300x286.png" alt="img" />
        </div>
      </div>
      <div className="columnHomePage">
        <div className="leftColumn">
          <Swiper navigation modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          <img
            src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2021/11/%D0%9F%D0%95%D0%A7%D0%90%D0%A2%D0%AC_%D0%90%D0%9D%D0%93-02-removebg-preview-1.png"
            alt="N.AGURBASH"
          />
        </div>
        <div className="rightColumn">
          <p>Агурбаш</p>
          <p>
            «Агурбаш» — новая концептуальная линейка элитных колбас и
            деликатесов от Николая Агурбаш, основателя
            бренда «Мортадель», который десятилетиями радует
            и удивляет покупателей неизменным качеством и непревзойденным вкусом своей продукции.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
