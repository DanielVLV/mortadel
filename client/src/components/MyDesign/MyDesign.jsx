/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards, Pagination, Navigation
} from "swiper";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import styles from './MyDesign.module.css';

function MyDesign() {
  const [selectedImage, setSelectedImage] = useState('./img/0.png');
  const [craftPaper, setcraftPaper] = useState('./img/paper1.png');

  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            // m: 1,

          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          <Button value="./img/1.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Пантера
          </Button>
          <Button value="./img/2.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Дракон
          </Button>
          <Button value="./img/4.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Тигр
          </Button>
          <Button value="./img/3.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Пума
          </Button>
          <Button value="./img/5.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Сердечко
          </Button>
          <Button value="./img/6.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Нота
          </Button>
          <Button value="./img/7.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Корона
          </Button>
          <Button value="./img/8.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Волк
          </Button>
          <Button value="./img/11.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Самурай
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          <Button value="./img/12.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Микрофон
          </Button>
          <Button value="./img/13.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Кружка
          </Button>
          <Button value="./img/14.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Пиво
          </Button>
          <Button value="./img/15.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Космос
          </Button>
          <Button value="./img/16.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Бургер
          </Button>
          <Button value="./img/17.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Пенное
          </Button>
          <Button value="./img/18.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Пикник
          </Button>
          <Button value="./img/20.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Роза
          </Button>
          <Button value="./img/21.png" onClick={(e) => setSelectedImage(e.target.value)}>
            Мяч
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
      >
        <div className={styles.imgPosition}>
          <img style={{ borderRadius: '20px' }} src={craftPaper} alt="test" />
          <img className={styles.print} src={selectedImage} alt="img" />
        </div>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          <Button value="./img/paper1.png" onClick={(e) => setcraftPaper(e.target.value)}>
            Стандарт
          </Button>
          <Button value="./img/paper2.png" onClick={(e) => setcraftPaper(e.target.value)}>
            Яркий
          </Button>
          <Button value="./img/paper3.png" onClick={(e) => setcraftPaper(e.target.value)}>
            Зеленый
          </Button>
          <Button value="./img/paper4.png" onClick={(e) => setcraftPaper(e.target.value)}>
            Синий
          </Button>
        </ButtonGroup>
      </Box>

      <Swiper
        effect="cards"
        grabCursor
        className={styles.mySwiper}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[EffectCards, Pagination, Navigation]}
      >
        <SwiperSlide><img src="./img/bouquet1.png" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="./img/bouquet2.png" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="./img/bouquet3.png" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="./img/bouquet4.png" alt="img" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MyDesign;
