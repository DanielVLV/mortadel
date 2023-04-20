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

import styles from './CategoryRow.css';

function CategoryRow({ el, setOpen, setFavs, allFavs, loading }) {
  return (
    <div className={styles.columnSwiperProducts}>
      {el.Products.length && (
        <Link style={{ padding: 0 }} to={`/categories/${el.id}`}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '40px',
            color: '#353757',
            fontWeight: 'bold',
          }}
          >
            {el.categoryName}

          </div>
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
      >
        {el.Products.map((product) => (
          <SwiperSlide className={styles.categoryOneCardBackground}>
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
