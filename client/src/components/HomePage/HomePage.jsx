/* eslint-disable import/no-unresolved */
import React from 'react';
import './HomePage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Pagination, Navigation } from 'swiper';
import { getProducts } from '../../redux/product.slice';

function HomePage() {

  return (
    <>
      <p>ЛЕГЕНДА ВОЗВРАЩАЕТСЯ!</p>
      <div className="columnHomePage">
        {/* <div className="leftColumn"> */}
        <div className="columnText">
          Пройдет немного времени и мы с Вами снова встретимся на торговых полках.
          Мы помним Ваши вкусы и потребности, ведь для их удовлетворения наша компания
          трудилась более 30 лет.
          Мы продолжаем наш путь с энтузиазмом, вооруженные честностью и любовью к своему
          Великому Делу - кормить людей,
          заряжать их энергией созидания.
          Руководство компании желает Вам здоровья и всяческих успехов!
        </div>
        <div className="columnSwiper">

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img className="imgSwiper" src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2022/05/Ветчина-ГОСТ-в-натуральной-оболочке--e1652791693541.png" alt="img" /></SwiperSlide>
            <SwiperSlide><img className="imgSwiper" src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2021/11/Колбаса-полукопченая-Мускатный-сервелат-e1652791706537.png" alt="img" /></SwiperSlide>
            <SwiperSlide><img className="imgSwiper" src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2021/11/сардельки-говяжьи-e1652789805669.png" alt="img" /></SwiperSlide>
            <SwiperSlide><img className="imgSwiper" src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2021/11/колбаса-варёно-копченая-Сервелат-ароматный-1-e1652791727604.png" alt="img" /></SwiperSlide>
            <SwiperSlide><img className="imgSwiper" src="https://xn--80aach9dr2b.xn--p1ai/wp-content/uploads/2021/11/Колбаса-полукопченая-Краковская-ГОСТ-e1652791737598.png" alt="img" /></SwiperSlide>
          </Swiper>
        </div>

      </div>
      {/* </div> */}
      <div className="columnHomePage">
        <div className="leftColumn">
          <img
            className="logo"
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
