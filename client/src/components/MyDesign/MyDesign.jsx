/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
// import styled from "@emotion/styled";

import { TextField, useMediaQuery, useTheme } from "@mui/material";
import styles from "./MyDesign.module.css";
import DesignForm from "./Form/DesignForm";

function MyDesign() {
  const [selectedImage, setSelectedImage] = useState("./img/0.png");
  const [craftPaper, setcraftPaper] = useState("./img/paper1.png");

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  // const theme = useTheme();
  // const isRequireAdaptaption = useMediaQuery(theme.breakpoints.down('lg'));



  return (
    <div className={styles.alldivDesign}>
      <div className={styles.container}>
        <div className={styles.textLeft}>
          Выбери принт
          <div className={styles.boxPrint}>
            <Box
              sx={{
                display: "flex",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup
                sx={{
                  '&>*': {
                    fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold',
                  }
                }}
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
              >
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/1.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Пантера
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/2.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Дракон
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/4.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Тигр
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/3.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Пума
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/5.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Сердечко
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/6.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Нота
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/7.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Корона
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/8.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Волк
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/11.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Самурай
                </Button>
              </ButtonGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                "&>*": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup
                sx={
                  {
                    "&>*": {
                      fontFamily: 'Lato Medium, sans-serif',
                      fontSize: '14px',
                      color: 'gold',
                    }
                  }
}
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
              >
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/12.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Микрофон
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/13.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Кружка
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/14.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Пиво
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/15.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Космос
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/16.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Бургер
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/17.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Пенное
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/18.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Пикник
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/20.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Роза
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/21.png"
                  onClick={(e) => setSelectedImage(e.target.value)}
                >
                  Мяч
                </Button>
              </ButtonGroup>
            </Box>
          </div>
        </div>
        <div className={styles.imgPosition}>
          <img className={styles.craftPaperStyle} src={craftPaper} alt="test" />
          <img className={styles.print} src={selectedImage} alt="img" />
        </div>
        <Box
          className={styles.boxPaperStyle}
        >
          <div className={styles.textRight}>
            Цвет упаковки
            <div>
              <ButtonGroup
                sx={{
                  '&>*': {
                    fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold',
                  }
                }}
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
              >
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/paper1.png"
                  onClick={(e) => setcraftPaper(e.target.value)}
                >
                  Стандарт
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/paper2.png"
                  onClick={(e) => setcraftPaper(e.target.value)}
                >
                  Яркий
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/paper3.png"
                  onClick={(e) => setcraftPaper(e.target.value)}
                >
                  Зеленый
                </Button>
                <Button
                  sx={{ fontFamily: 'Lato Medium, sans-serif',
                    fontSize: '14px',
                    color: 'gold', }}
                  value="./img/paper4.png"
                  onClick={(e) => setcraftPaper(e.target.value)}
                >
                  Синий
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Box>
      </div>
      <div className={styles.filling}>
        <Swiper
          effect="cards"
          grabCursor
          className={styles.mySwiperGift}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[EffectCards, Pagination, Navigation]}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide className={styles.oneCardBackground}>
            <img src="./img/bouquet1.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide className={styles.oneCardBackground}>
            <img src="./img/bouquet2.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide className={styles.oneCardBackground}>
            <img src="./img/bouquet3.png" alt="img" />
          </SwiperSlide>
          <SwiperSlide className={styles.oneCardBackground}>
            <img src="./img/bouquet4.png" alt="img" />
          </SwiperSlide>
        </Swiper>
        <div className={styles.designFormStyle}>
          <DesignForm
            style={{ fontSize: '12px' }}
            selectedImage={selectedImage}
            craftPaper={craftPaper}
            activeSlideIndex={activeSlideIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default MyDesign;
