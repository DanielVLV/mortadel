/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProductElement from "../ProductElement/ProductElement";

import "./CategoryRow.css";

function CategoryRow({ el, setOpen }) {
  return (
    <div className="columnSwiperProducts">
      {el.Products.length && <h2>{el.categoryName}</h2>}
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

        {el.Products.map((product) => (
          <SwiperSlide>
            <ProductElement key={product.id} product={product} setOpen={setOpen} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryRow;
