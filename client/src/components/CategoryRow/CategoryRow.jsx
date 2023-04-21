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

      <div style={{
        margin: '15px 0 '
      }}
      >
        <Link
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '28px',
            color: 'gold',
            fontWeight: 'normal',
            backgroundColor: "rgba(67, 71, 92, 0.801)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 60px var(--metal)",
            borderRadius: "20px",
            padding: '5px 30px ',
            // maxWidth: "50%",
            // marginBottom: '100px',
          }}
          to={`/categories/${el.id}`}
        >
          {el.categoryName}
        </Link>
      </div>
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
