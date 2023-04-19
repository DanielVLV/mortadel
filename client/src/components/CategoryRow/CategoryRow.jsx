/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import ProductElement from "../ProductElement/ProductElement";
import styles from "./categoryRow.css";

function CategoryRow({ el, setOpen, setFavs, allFavs, loading }) {
  return (
    <div className={styles.columnSwiperProducts}>
      {el.Products.length && (
        <Link to={`/categories/${el.id}`}>
          <h2>{el.categoryName}</h2>
        </Link>
      )}
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {el.Products.map((product) => (
          <SwiperSlide>
            <ProductElement
              key={product.id}
              product={product}
              setOpen={setOpen}
              setFavs={setFavs}
              allFavs={allFavs}
              loading={loading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryRow;
