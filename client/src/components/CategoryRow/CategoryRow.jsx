/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import ProductElement from "../ProductElement/ProductElement";


import './CategoryRow.css';

function CategoryRow({ el }) {
  console.log("productsInCategoryArr", el.Products);
  return (
    <div className="columnSwiperProducts">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <h2>{el.categoryName}</h2>
        {el.Products.map((product) => (
          <SwiperSlide>
            <ProductElement key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryRow;
